// ========================================
// DompetKu - Expense Tracker App
// ========================================

// Splash Screen Control
window.addEventListener('load', () => {
  // Minimum display time for splash screen (1.5 seconds)
  const minDisplayTime = 1500;
  const startTime = Date.now();
  
  // Hide splash screen after minimum time
  const hideSplash = () => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
    
    setTimeout(() => {
      const splashScreen = document.getElementById('splashScreen');
      if (splashScreen) {
        splashScreen.classList.add('hidden');
        // Remove from DOM after animation
        setTimeout(() => {
          splashScreen.remove();
        }, 500);
      }
    }, remainingTime);
  };
  
  // Hide splash when everything is loaded
  if (document.readyState === 'complete') {
    hideSplash();
  } else {
    window.addEventListener('load', hideSplash);
  }
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// App State
let expenses = [];
let currentFilter = 'all';
let currentSearch = '';
let deleteTarget = null;

// DOM Elements
const elements = {
  form: document.getElementById('expenseForm'),
  nameInput: document.getElementById('expenseName'),
  amountInput: document.getElementById('expenseAmount'),
  categoryInput: document.getElementById('expenseCategory'),
  dateInput: document.getElementById('expenseDate'),
  noteInput: document.getElementById('expenseNoteInput'),
  
  nameError: document.getElementById('nameError'),
  amountError: document.getElementById('amountError'),
  categoryError: document.getElementById('categoryError'),
  dateError: document.getElementById('dateError'),
  
  totalExpense: document.getElementById('totalExpense'),
  totalCount: document.getElementById('totalCount'),
  todayExpense: document.getElementById('todayExpense'),
  todayCount: document.getElementById('todayCount'),
  topCategory: document.getElementById('topCategory'),
  topCategoryAmount: document.getElementById('topCategoryAmount'),
  
  expenseList: document.getElementById('expenseList'),
  emptyState: document.getElementById('emptyState'),
  
  searchInput: document.getElementById('searchInput'),
  filterChips: document.querySelectorAll('.chip'),
  
  exportBtn: document.getElementById('exportBtn'),
  clearAllBtn: document.getElementById('clearAllBtn'),
  themeToggle: document.getElementById('themeToggle'),
  
  toast: document.getElementById('toast'),
  
  confirmModal: document.getElementById('confirmModal'),
  modalTitle: document.getElementById('modalTitle'),
  modalBody: document.getElementById('modalBody'),
  modalCancel: document.getElementById('modalCancel'),
  modalConfirm: document.getElementById('modalConfirm')
};

// Initialize App
function init() {
  loadExpenses();
  setTodayDate();
  setupEventListeners();
  updateSummary();
  renderExpenses();
  loadTheme();
}

// Set today's date as default
function setTodayDate() {
  const today = new Date().toISOString().split('T')[0];
  elements.dateInput.value = today;
}

// Setup Event Listeners
function setupEventListeners() {
  // Form submission
  elements.form.addEventListener('submit', handleFormSubmit);
  
  // Amount input formatting
  elements.amountInput.addEventListener('input', formatAmountInput);
  
  // Search
  elements.searchInput.addEventListener('input', handleSearch);
  
  // Filter chips
  elements.filterChips.forEach(chip => {
    chip.addEventListener('click', handleFilterClick);
  });
  
  // Export button
  elements.exportBtn.addEventListener('click', exportToCSV);
  
  // Clear all button
  elements.clearAllBtn.addEventListener('click', showClearAllModal);
  
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Modal buttons
  elements.modalCancel.addEventListener('click', hideModal);
  elements.modalConfirm.addEventListener('click', handleModalConfirm);
  
  // Close modal on overlay click
  elements.confirmModal.addEventListener('click', (e) => {
    if (e.target === elements.confirmModal) {
      hideModal();
    }
  });
}

// Format amount input with thousands separator
function formatAmountInput(e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
  
  if (value) {
    // Format with thousands separator (dot)
    value = parseInt(value).toLocaleString('id-ID');
  }
  
  e.target.value = value;
}

// Parse formatted amount to number
function parseAmount(formattedAmount) {
  return parseInt(formattedAmount.replace(/\./g, '')) || 0;
}

// Format number to Rupiah
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

// Validate form
function validateForm() {
  let isValid = true;
  
  // Clear previous errors
  elements.nameError.textContent = '';
  elements.amountError.textContent = '';
  elements.categoryError.textContent = '';
  elements.dateError.textContent = '';
  
  // Validate name
  if (!elements.nameInput.value.trim()) {
    elements.nameError.textContent = 'Nama pengeluaran wajib diisi';
    isValid = false;
  }
  
  // Validate amount
  const amount = parseAmount(elements.amountInput.value);
  if (!amount || amount <= 0) {
    elements.amountError.textContent = 'Nominal harus lebih dari 0';
    isValid = false;
  }
  
  // Validate category
  if (!elements.categoryInput.value) {
    elements.categoryError.textContent = 'Pilih kategori';
    isValid = false;
  }
  
  // Validate date
  if (!elements.dateInput.value) {
    elements.dateError.textContent = 'Tanggal wajib diisi';
    isValid = false;
  }
  
  return isValid;
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  if (!validateForm()) {
    showToast('Mohon lengkapi form dengan benar', 'error');
    return;
  }
  
  const expense = {
    id: Date.now(),
    name: elements.nameInput.value.trim(),
    amount: parseAmount(elements.amountInput.value),
    category: elements.categoryInput.value,
    date: elements.dateInput.value,
    note: elements.noteInput.value.trim(),
    createdAt: new Date().toISOString()
  };
  
  expenses.unshift(expense); // Add to beginning
  saveExpenses();
  updateSummary();
  renderExpenses();
  
  // Reset form
  elements.form.reset();
  setTodayDate();
  
  showToast('Pengeluaran berhasil ditambahkan! 🎉', 'success');
}

// Delete expense
function deleteExpense(id) {
  const item = document.querySelector(`[data-id="${id}"]`);
  
  if (item) {
    item.classList.add('removing');
    
    setTimeout(() => {
      expenses = expenses.filter(exp => exp.id !== id);
      saveExpenses();
      updateSummary();
      renderExpenses();
      showToast('Pengeluaran berhasil dihapus', 'info');
    }, 300);
  }
}

// Show delete confirmation modal
function showDeleteModal(id) {
  deleteTarget = id;
  const expense = expenses.find(exp => exp.id === id);
  
  if (expense) {
    elements.modalTitle.textContent = 'Hapus Pengeluaran?';
    elements.modalBody.textContent = `Yakin ingin menghapus "${expense.name}"? Tindakan ini tidak dapat dibatalkan.`;
    elements.confirmModal.classList.add('show');
  }
}

// Show clear all confirmation modal
function showClearAllModal() {
  if (expenses.length === 0) {
    showToast('Tidak ada data untuk dihapus', 'info');
    return;
  }
  
  deleteTarget = 'all';
  elements.modalTitle.textContent = 'Hapus Semua Data?';
  elements.modalBody.textContent = `Yakin ingin menghapus semua ${expenses.length} pengeluaran? Tindakan ini tidak dapat dibatalkan.`;
  elements.confirmModal.classList.add('show');
}

// Hide modal
function hideModal() {
  elements.confirmModal.classList.remove('show');
  deleteTarget = null;
}

// Handle modal confirmation
function handleModalConfirm() {
  if (deleteTarget === 'all') {
    expenses = [];
    saveExpenses();
    updateSummary();
    renderExpenses();
    showToast('Semua data berhasil dihapus', 'info');
  } else if (deleteTarget) {
    deleteExpense(deleteTarget);
  }
  
  hideModal();
}

// Handle search
function handleSearch(e) {
  currentSearch = e.target.value.toLowerCase();
  renderExpenses();
}

// Handle filter click
function handleFilterClick(e) {
  const filter = e.target.dataset.filter;
  
  // Update active state
  elements.filterChips.forEach(chip => {
    chip.classList.remove('chip--active');
  });
  e.target.classList.add('chip--active');
  
  currentFilter = filter;
  renderExpenses();
}

// Filter expenses
function filterExpenses() {
  let filtered = expenses;
  
  // Apply category filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter(exp => exp.category === currentFilter);
  }
  
  // Apply search filter
  if (currentSearch) {
    filtered = filtered.filter(exp => {
      return exp.name.toLowerCase().includes(currentSearch) ||
             exp.category.toLowerCase().includes(currentSearch) ||
             exp.note.toLowerCase().includes(currentSearch);
    });
  }
  
  return filtered;
}

// Render expenses
function renderExpenses() {
  const filtered = filterExpenses();
  
  if (filtered.length === 0) {
    elements.expenseList.innerHTML = '';
    elements.emptyState.classList.remove('hidden');
    elements.emptyState.setAttribute('aria-hidden', 'false');
    return;
  }
  
  elements.emptyState.classList.add('hidden');
  elements.emptyState.setAttribute('aria-hidden', 'true');
  
  elements.expenseList.innerHTML = filtered.map(expense => {
    const categoryEmoji = getCategoryEmoji(expense.category);
    const formattedDate = formatDate(expense.date);
    
    return `
      <div class="expense-item" data-id="${expense.id}" role="listitem">
        <div class="expense-info">
          <div class="expense-header">
            <span class="expense-name">${escapeHtml(expense.name)}</span>
            <span class="expense-category">${categoryEmoji} ${expense.category}</span>
          </div>
          <div class="expense-meta">
            <span class="expense-date">📅 ${formattedDate}</span>
            ${expense.note ? `<span class="expense-note">📝 ${escapeHtml(expense.note)}</span>` : ''}
          </div>
        </div>
        <div class="expense-actions">
          <span class="expense-amount">${formatRupiah(expense.amount)}</span>
          <button class="btn-delete" onclick="showDeleteModal(${expense.id})" aria-label="Hapus ${escapeHtml(expense.name)}">
            🗑️ Hapus
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Get category emoji
function getCategoryEmoji(category) {
  const emojiMap = {
    'Makanan': '🍜',
    'Transportasi': '🚌',
    'Tugas/Kuliah': '📚',
    'Hiburan': '🎮',
    'Kesehatan': '💊',
    'Lainnya': '📦'
  };
  return emojiMap[category] || '📦';
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Update summary
function updateSummary() {
  // Total expenses
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  elements.totalExpense.textContent = formatRupiah(total);
  elements.totalCount.textContent = `${expenses.length} transaksi`;
  
  // Today's expenses
  const today = new Date().toISOString().split('T')[0];
  const todayExpenses = expenses.filter(exp => exp.date === today);
  const todayTotal = todayExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  elements.todayExpense.textContent = formatRupiah(todayTotal);
  elements.todayCount.textContent = `${todayExpenses.length} transaksi`;
  
  // Top category
  const categoryTotals = {};
  expenses.forEach(exp => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
  });
  
  const topCategoryEntry = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0];
  
  if (topCategoryEntry) {
    const [category, amount] = topCategoryEntry;
    const emoji = getCategoryEmoji(category);
    elements.topCategory.textContent = `${emoji} ${category}`;
    elements.topCategoryAmount.textContent = formatRupiah(amount);
  } else {
    elements.topCategory.textContent = '—';
    elements.topCategoryAmount.textContent = 'Rp 0';
  }
}

// Export to CSV
function exportToCSV() {
  if (expenses.length === 0) {
    showToast('Tidak ada data untuk diekspor', 'info');
    return;
  }
  
  // CSV Header
  let csv = 'Tanggal,Nama,Kategori,Nominal,Catatan\n';
  
  // CSV Data
  expenses.forEach(exp => {
    const row = [
      exp.date,
      `"${exp.name.replace(/"/g, '""')}"`, // Escape quotes
      exp.category,
      exp.amount,
      `"${exp.note.replace(/"/g, '""')}"`
    ].join(',');
    csv += row + '\n';
  });
  
  // Create download link
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `dompetku_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('Data berhasil diekspor! 📥', 'success');
}

// Show toast notification
function showToast(message, type = 'info') {
  elements.toast.textContent = message;
  elements.toast.className = `toast ${type}`;
  elements.toast.classList.add('show');
  
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3000);
}

// Theme toggle
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  elements.themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load theme
function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    elements.themeToggle.textContent = '☀️';
  }
}

// LocalStorage functions
function saveExpenses() {
  localStorage.setItem('dompetku_expenses', JSON.stringify(expenses));
}

function loadExpenses() {
  const stored = localStorage.getItem('dompetku_expenses');
  if (stored) {
    try {
      expenses = JSON.parse(stored);
    } catch (e) {
      console.error('Error loading expenses:', e);
      expenses = [];
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Make functions globally accessible for inline event handlers
window.showDeleteModal = showDeleteModal;
