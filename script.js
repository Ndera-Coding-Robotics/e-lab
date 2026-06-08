// ============================================================================
// E-Lab Library Management System - JavaScript
// Complete implementation with sample data, search, borrowing, and admin
// ============================================================================

// Sample Book Data
const BOOKS = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    category: "Programming",
    year: 2008,
    description: "A comprehensive guide to writing clean, maintainable code.",
    totalCopies: 4,
    reviews: [
      "Excellent guide for every programmer",
      "Must read for developers",
    ],
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    category: "Self-Help",
    year: 2018,
    description: "Transform your life with tiny changes.",
    totalCopies: 5,
    reviews: ["Life-changing book", "Practical and actionable"],
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9780465019779",
    category: "Productivity",
    year: 2016,
    description: "Rules for focused success in a distracted world.",
    totalCopies: 3,
    reviews: ["Essential reading", "Highly recommended"],
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    isbn: "9780970636706",
    category: "Finance",
    year: 1997,
    description: "Financial wisdom from two fathers with contrasting views.",
    totalCopies: 4,
    reviews: [
      "Eye-opening financial insights",
      "Great introduction to investing",
    ],
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    isbn: "9781492209331",
    category: "Motivation",
    year: 1937,
    description: "Timeless principles for success and achievement.",
    totalCopies: 3,
    reviews: ["Classic motivational read", "Timeless wisdom"],
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    isbn: "9780201616224",
    category: "Programming",
    year: 1999,
    description: "Your journey to mastery in software development.",
    totalCopies: 2,
    reviews: ["Essential programming guide", "Practical advice for developers"],
  },
  {
    id: 7,
    title: "Python Crash Course",
    author: "Eric Matthes",
    isbn: "9781593279288",
    category: "Programming",
    year: 2015,
    description: "A hands-on, project-based introduction to Python.",
    totalCopies: 4,
    reviews: ["Great Python tutorial", "Perfect for beginners"],
  },
  {
    id: 8,
    title: "Design Patterns",
    author: "Gang of Four",
    isbn: "9780201633610",
    category: "Programming",
    year: 1994,
    description: "Elements of reusable object-oriented software.",
    totalCopies: 2,
    reviews: ["Complex but essential", "Classic software design book"],
  },
  {
    id: 9,
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    isbn: "9780262033848",
    category: "Programming",
    year: 2009,
    description: "Comprehensive guide to algorithm design and analysis.",
    totalCopies: 3,
    reviews: ["Definitive algorithms reference", "Very detailed and thorough"],
  },
  {
    id: 10,
    title: "The Lean Startup",
    author: "Eric Ries",
    isbn: "9780307887894",
    category: "Business",
    year: 2011,
    description: "How today's entrepreneurs use continuous innovation.",
    totalCopies: 3,
    reviews: ["Revolutionary business approach", "Highly practical"],
  },
  {
    id: 11,
    title: "Refactoring",
    author: "Martin Fowler",
    isbn: "9780201485677",
    category: "Programming",
    year: 1999,
    description: "Improving the design of existing code.",
    totalCopies: 2,
    reviews: ["Essential for code quality", "Practical refactoring techniques"],
  },
  {
    id: 12,
    title: "The Art of Computer Programming",
    author: "Donald Knuth",
    isbn: "9780201061215",
    category: "Programming",
    year: 1997,
    description: "Comprehensive treatment of algorithms and their analysis.",
    totalCopies: 1,
    reviews: [
      "Masterpiece of programming literature",
      "Complex but comprehensive",
    ],
  },
  {
    id: 13,
    title: "Cracking the Coding Interview",
    author: "Gayle McDowell",
    isbn: "9780984782857",
    category: "Programming",
    year: 2015,
    description: "A guide to technical interviews and problem solving.",
    totalCopies: 3,
    reviews: ["Perfect for interview prep", "Great coding practice"],
  },
  {
    id: 14,
    title: "Code Complete",
    author: "Steve McConnell",
    isbn: "9780735619678",
    category: "Programming",
    year: 2004,
    description: "A practical handbook of software construction.",
    totalCopies: 2,
    reviews: [
      "Comprehensive programming guide",
      "Best practices for developers",
    ],
  },
  {
    id: 15,
    title: "The Phoenix Project",
    author: "Gene Kim, Kevin Behr, George Spafford",
    isbn: "9780988262935",
    category: "Business",
    year: 2013,
    description: "A novel about IT, DevOps, and helping your business win.",
    totalCopies: 3,
    reviews: ["Novel approach to IT management", "Engaging and educational"],
  },
  {
    id: 16,
    title: "Good to Great",
    author: "Jim Collins",
    isbn: "9780066620992",
    category: "Business",
    year: 2001,
    description: "Why some companies make the leap and others don't.",
    totalCopies: 2,
    reviews: ["Insightful business analysis", "Well-researched and compelling"],
  },
  {
    id: 17,
    title: "The Innovators",
    author: "Walter Isaacson",
    isbn: "9781476708690",
    category: "History",
    year: 2014,
    description:
      "How a group of hackers, geniuses, and geeks created the digital revolution.",
    totalCopies: 2,
    reviews: ["Fascinating tech history", "Engaging storytelling"],
  },
  {
    id: 18,
    title: "Mindset",
    author: "Carol S. Dweck",
    isbn: "9780345472328",
    category: "Psychology",
    year: 2006,
    description: "The new psychology of success.",
    totalCopies: 3,
    reviews: ["Transformative perspectives", "Empowering and practical"],
  },
  {
    id: 19,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    isbn: "9780062316097",
    category: "History",
    year: 2014,
    description: "A brief history of humankind.",
    totalCopies: 4,
    reviews: ["Mind-expanding perspective", "Brilliantly written"],
  },
  {
    id: 20,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    isbn: "9780198788607",
    category: "Science",
    year: 1976,
    description:
      "A revolutionary explanation of evolution and natural selection.",
    totalCopies: 2,
    reviews: ["Groundbreaking ideas", "Thought-provoking science"],
  },
  {
    id: 21,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "9780374275631",
    category: "Psychology",
    year: 2011,
    description: "Insights into the two systems of thought.",
    totalCopies: 3,
    reviews: ["Illuminating psychology", "Challenges your thinking"],
  },
  {
    id: 22,
    title: "The Lean Product Playbook",
    author: "Dan Olsen",
    isbn: "9781491927281",
    category: "Business",
    year: 2015,
    description: "How to innovate products successfully.",
    totalCopies: 2,
    reviews: ["Practical product development", "Great for entrepreneurs"],
  },
  {
    id: 23,
    title: "Zero to One",
    author: "Peter Thiel",
    isbn: "9780804139298",
    category: "Business",
    year: 2014,
    description: "Notes on startups, or how to build the future.",
    totalCopies: 3,
    reviews: ["Unconventional wisdom", "Inspiring for entrepreneurs"],
  },
  {
    id: 24,
    title: "Traction",
    author: "Gabriel Weinberg & Justin Mares",
    isbn: "9781491949178",
    category: "Business",
    year: 2015,
    description: "How any startup can achieve explosive growth.",
    totalCopies: 2,
    reviews: ["Practical growth strategies", "Comprehensive framework"],
  },
  {
    id: 25,
    title: "The Four-Hour Workweek",
    author: "Tim Ferriss",
    isbn: "9780307465351",
    category: "Self-Help",
    year: 2007,
    description: "Escape 9-5, live anywhere, and join the new rich.",
    totalCopies: 3,
    reviews: ["Life-changing insights", "Practical lifestyle design"],
  },
  {
    id: 26,
    title: "Outliers",
    author: "Malcolm Gladwell",
    isbn: "9780316017923",
    category: "Psychology",
    year: 2008,
    description:
      "The story of success - why some people achieve it and others don't.",
    totalCopies: 3,
    reviews: ["Fascinating case studies", "Eye-opening perspective"],
  },
  {
    id: 27,
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    isbn: "9780316346627",
    category: "Business",
    year: 2000,
    description: "How little things can make a big difference.",
    totalCopies: 2,
    reviews: ["Insightful analysis", "Engaging storytelling"],
  },
  {
    id: 28,
    title: "Blink",
    author: "Malcolm Gladwell",
    isbn: "9780316010770",
    category: "Psychology",
    year: 2005,
    description: "The power of thinking without thinking.",
    totalCopies: 2,
    reviews: ["Quick, insightful read", "Intriguing perspectives"],
  },
  {
    id: 29,
    title: "David and Goliath",
    author: "Malcolm Gladwell",
    isbn: "9780316204368",
    category: "Self-Help",
    year: 2013,
    description: "Underdogs, misfits, and the art of battling giants.",
    totalCopies: 2,
    reviews: ["Inspirational stories", "Great motivational read"],
  },
  {
    id: 30,
    title: "Quiet",
    author: "Susan Cain",
    isbn: "9780307352156",
    category: "Psychology",
    year: 2012,
    description: "The power of introverts in a world that can't stop talking.",
    totalCopies: 3,
    reviews: ["Validating for introverts", "Well-researched and empowering"],
  },
  {
    id: 31,
    title: "Never Split the Difference",
    author: "Chris Voss",
    isbn: "9780062407009",
    category: "Business",
    year: 2016,
    description: "Negotiating as if your life depended on it.",
    totalCopies: 2,
    reviews: ["Practical negotiation tactics", "Highly applicable advice"],
  },
  {
    id: 32,
    title: "Predictably Irrational",
    author: "Dan Ariely",
    isbn: "9780061353139",
    category: "Psychology",
    year: 2008,
    description: "The hidden forces that shape our decisions.",
    totalCopies: 2,
    reviews: ["Eye-opening economics", "Entertaining and insightful"],
  },
  {
    id: 33,
    title: "The Talent Code",
    author: "Daniel Coyle",
    isbn: "9780553067286",
    category: "Self-Help",
    year: 2009,
    description: "Greatness isn't born. It's grown.",
    totalCopies: 2,
    reviews: ["Inspiring talent development", "Practical skill-building guide"],
  },
  {
    id: 34,
    title: "Peak Performance",
    author: "Brad Stulberg & Steve Magness",
    isbn: "9781640944541",
    category: "Sports",
    year: 2017,
    description:
      "Elevate your game, avoid burnout, and thrive with the new science of success.",
    totalCopies: 2,
    reviews: [
      "Performance optimization guide",
      "Great for athletes and professionals",
    ],
  },
  {
    id: 35,
    title: "Range",
    author: "David Epstein",
    isbn: "9780735214484",
    category: "Self-Help",
    year: 2019,
    description: "Why generalists triumph in a specialized world.",
    totalCopies: 2,
    reviews: [
      "Challenges conventional wisdom",
      "Inspiring and well-researched",
    ],
  },
  {
    id: 36,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    isbn: "9780761169253",
    category: "Creativity",
    year: 2012,
    description: "10 things nobody told you about being creative.",
    totalCopies: 2,
    reviews: ["Inspiring for creatives", "Quick and practical"],
  },
  {
    id: 37,
    title: "Show Your Work",
    author: "Austin Kleon",
    isbn: "9780761276661",
    category: "Creativity",
    year: 2014,
    description: "10 ways to share your creativity and get discovered.",
    totalCopies: 2,
    reviews: ["Great for creators", "Actionable advice"],
  },
  {
    id: 38,
    title: "The War of Art",
    author: "Steven Pressfield",
    isbn: "9781590710043",
    category: "Creativity",
    year: 2002,
    description:
      "Break through the blocks and win your inner creative battles.",
    totalCopies: 2,
    reviews: ["Motivational for artists", "Battles creative resistance"],
  },
  {
    id: 39,
    title: "Essentialism",
    author: "Greg McKeown",
    isbn: "9780804137522",
    category: "Productivity",
    year: 2014,
    description: "The disciplined pursuit of less.",
    totalCopies: 2,
    reviews: ["Clarifying life priorities", "Practical minimalism"],
  },
  {
    id: 40,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    isbn: "9780743269513",
    category: "Self-Help",
    year: 1989,
    description: "Personal change and interpersonal effectiveness.",
    totalCopies: 3,
    reviews: ["Classic self-help book", "Timeless wisdom"],
  },
  {
    id: 41,
    title: "Getting Things Done",
    author: "David Allen",
    isbn: "9780143126554",
    category: "Productivity",
    year: 2001,
    description: "The art of stress-free productivity.",
    totalCopies: 2,
    reviews: ["Life-changing organization", "Practical productivity system"],
  },
  {
    id: 42,
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    isbn: "9780887307288",
    category: "Business",
    year: 1995,
    description:
      "Why most small businesses don't work and what to do about it.",
    totalCopies: 2,
    reviews: [
      "Essential for entrepreneurs",
      "Transformative business insights",
    ],
  },
  {
    id: 43,
    title: "Pour Your Heart Into It",
    author: "Howard Schultz",
    isbn: "9780786883561",
    category: "Business",
    year: 1997,
    description: "How Starbucks built a company one cup at a time.",
    totalCopies: 1,
    reviews: ["Inspiring business journey", "Leadership lessons"],
  },
  {
    id: 44,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isbn: "9781451648539",
    category: "Biography",
    year: 2011,
    description: "The exclusive biography of the Apple founder.",
    totalCopies: 3,
    reviews: ["Compelling biography", "Insightful and detailed"],
  },
  {
    id: 45,
    title: "Elon Musk",
    author: "Walter Isaacson",
    isbn: "9781668031964",
    category: "Biography",
    year: 2023,
    description: "Tesla, SpaceX, and the Quest for a Fantastic Future.",
    totalCopies: 2,
    reviews: ["Fascinating entrepreneur story", "Eye-opening insights"],
  },
  {
    id: 46,
    title: "The Innovators Dilemma",
    author: "Clayton Christensen",
    isbn: "9780062060715",
    category: "Business",
    year: 1997,
    description: "When new technologies cause great firms to fail.",
    totalCopies: 1,
    reviews: ["Essential business strategy", "Revolutionary theory"],
  },
  {
    id: 47,
    title: "Platform Revolution",
    author: "Geoffrey Parker, Marshall Van Alstyne, Sangeet Paul Moorjani",
    isbn: "9780393249132",
    category: "Business",
    year: 2016,
    description: "How networked markets are transforming the economy.",
    totalCopies: 1,
    reviews: ["Modern business insights", "Platform economy guide"],
  },
  {
    id: 48,
    title: "The Attention Merchants",
    author: "Tim Wu",
    isbn: "9780385352009",
    category: "Business",
    year: 2016,
    description: "The epic scramble to get inside our heads.",
    totalCopies: 1,
    reviews: ["Critical media analysis", "Eye-opening perspective"],
  },
  {
    id: 49,
    title: "Empowered",
    author: "Marty Cagan & Chris Jones",
    isbn: "9781491950914",
    category: "Business",
    year: 2020,
    description: "Ordinary people, extraordinary products.",
    totalCopies: 2,
    reviews: ["Product leadership guide", "Practical and insightful"],
  },
  {
    id: 50,
    title: "Inspired",
    author: "Marty Cagan",
    isbn: "9781491927281",
    category: "Business",
    year: 2008,
    description: "How to create products customers love.",
    totalCopies: 2,
    reviews: ["Essential product book", "Practical product management"],
  },
];

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  loadTheme();
  setupEventListeners();

  const currentPage = document.body.className;

  if (currentPage.includes("home")) initHome();
  if (currentPage.includes("books-page")) initBooksPage();
  if (currentPage.includes("book-details")) initBookDetails();
  if (currentPage.includes("dashboard")) initDashboard();
  if (currentPage.includes("admin")) initAdmin();
}

// ============================================================================
// THEME MANAGEMENT
// ============================================================================

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark-mode");
  }
}

// ============================================================================
// STORAGE MANAGEMENT
// ============================================================================

function getBooks() {
  const stored = localStorage.getItem("books");
  return stored ? JSON.parse(stored) : BOOKS;
}

function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

function getUser() {
  const stored = localStorage.getItem("user");
  return stored
    ? JSON.parse(stored)
    : {
        name: "Student User",
        email: "user@library.edu",
        borrowedBooks: [],
        borrowHistory: [],
        notifications: [],
        wishlist: [],
        reservations: [],
      };
}

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// ============================================================================
// EVENT LISTENERS SETUP
// ============================================================================

function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Home page search
  const homeSearchForm = document.querySelector("#homeSearchForm");
  if (homeSearchForm) {
    homeSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = document.querySelector("#homeSearchInput").value;
      if (query) {
        window.location.href = `books.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<p>${message}</p>`;

  const container = document.querySelector(".toast-container") || document.body;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideUp 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================================
// HOME PAGE
// ============================================================================

function initHome() {
  loadFeaturedBooks();
  loadCategories();
  updateStats();
}

function loadFeaturedBooks() {
  const books = getBooks();
  const featured = books.slice(0, 6);
  const grid = document.querySelector("#homeFeaturedGrid");

  if (!grid) return;

  grid.innerHTML = featured.map((book) => createBookCard(book)).join("");
}

function loadCategories() {
  const books = getBooks();
  const categories = [...new Set(books.map((b) => b.category))];
  const container = document.querySelector("#homeCategories");

  if (!container) return;

  container.innerHTML = categories
    .map((cat) => {
      const count = books.filter((b) => b.category === cat).length;
      return `
      <div class="category-card">
        <h3>${cat}</h3>
        <p><span>${count}</span> books</p>
      </div>
    `;
    })
    .join("");
}

function updateStats() {
  const books = getBooks();
  const user = getUser();
  const overdueCount = user.borrowedBooks.filter(
    (loan) => new Date(loan.dueDate) < new Date(),
  ).length;
  const reserved = user.reservations ? user.reservations.length : 0;

  const statElements = {
    statTotalBooks: books.length,
    statActiveLoans: user.borrowedBooks.length,
    statOverdueCount: overdueCount,
    statReservedCount: reserved,
  };

  Object.entries(statElements).forEach(([id, value]) => {
    const el = document.querySelector(`#${id}`);
    if (el) el.textContent = value;
  });
}

// ============================================================================
// BOOKS PAGE
// ============================================================================

function initBooksPage() {
  const books = getBooks();
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("search");

  // Setup category filter
  setupCategoryFilter();

  // Display books
  displayBooks(books);

  // Setup search
  const searchInput = document.querySelector("#booksSearch");
  const categoryFilter = document.querySelector("#booksCategoryFilter");
  const clearBtn = document.querySelector("#booksClear");

  if (searchInput) {
    searchInput.addEventListener("input", filterBooks);
    if (searchQuery) searchInput.value = searchQuery;
  }

  if (categoryFilter) categoryFilter.addEventListener("change", filterBooks);
  if (clearBtn) clearBtn.addEventListener("click", clearFilters);

  if (searchQuery) filterBooks();
}

function setupCategoryFilter() {
  const books = getBooks();
  const categories = [...new Set(books.map((b) => b.category))];
  const select = document.querySelector("#booksCategoryFilter");

  if (!select) return;

  select.innerHTML =
    '<option value="">All categories</option>' +
    categories.map((cat) => `<option value="${cat}">${cat}</option>`).join("");
}

function displayBooks(books) {
  const grid = document.querySelector("#booksGrid");
  if (!grid) return;

  grid.innerHTML = books.length
    ? books.map((book) => createBookCard(book)).join("")
    : '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No books found</p>';
}

function createBookCard(book) {
  const availableCopies =
    book.totalCopies -
    (getUser().borrowedBooks.filter((b) => b.id === book.id).length || 0);
  const isAvailable = availableCopies > 0;

  return `
    <div class="card">
      <img class="card-image" src="library.avif" alt="${book.title}">
      <div class="card-content">
        <span class="card-category">${book.category}</span>
        <h3>${book.title}</h3>
        <p>${book.description.substring(0, 80)}...</p>
        <div class="card-meta">
          <span>${book.author}</span>
          <span class="availability ${isAvailable ? "available" : "unavailable"}">
            ${isAvailable ? `${availableCopies} available` : "Unavailable"}
          </span>
        </div>
        <div class="card-actions">
          <a href="book-details.html?id=${book.id}" class="btn btn-secondary">View</a>
          <button class="btn btn-primary" onclick="borrowBook(${book.id})" ${!isAvailable ? "disabled" : ""}>
            Borrow
          </button>
        </div>
      </div>
    </div>
  `;
}

function filterBooks() {
  const books = getBooks();
  const search =
    document.querySelector("#booksSearch")?.value.toLowerCase() || "";
  const category = document.querySelector("#booksCategoryFilter")?.value || "";

  let filtered = books.filter((book) => {
    const matchesSearch =
      !search ||
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.isbn.includes(search);

    const matchesCategory = !category || book.category === category;

    return matchesSearch && matchesCategory;
  });

  displayBooks(filtered);
}

function clearFilters() {
  document.querySelector("#booksSearch").value = "";
  document.querySelector("#booksCategoryFilter").value = "";
  displayBooks(getBooks());
}

// ============================================================================
// BOOK DETAILS PAGE
// ============================================================================

function initBookDetails() {
  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get("id"));

  if (!bookId) {
    window.location.href = "books.html";
    return;
  }

  const book = getBooks().find((b) => b.id === bookId);
  if (!book) {
    window.location.href = "books.html";
    return;
  }

  displayBookDetails(book);

  // Setup buttons
  const borrowBtn = document.querySelector("#detailBorrowButton");
  const reserveBtn = document.querySelector("#detailReserveButton");

  if (borrowBtn) borrowBtn.addEventListener("click", () => borrowBook(bookId));
  if (reserveBtn)
    reserveBtn.addEventListener("click", () => reserveBook(bookId));
}

function displayBookDetails(book) {
  const user = getUser();
  const availableCopies =
    book.totalCopies -
    (user.borrowedBooks.filter((b) => b.id === book.id).length || 0);
  const isAvailable = availableCopies > 0;

  document.querySelector("#detailCategory").textContent = book.category;
  document.querySelector("#detailTitle").textContent = book.title;
  document.querySelector("#detailDescription").textContent = book.description;
  document.querySelector("#detailAuthor").textContent = book.author;
  document.querySelector("#detailIsbn").textContent = book.isbn;
  document.querySelector("#detailYear").textContent = book.year;
  document.querySelector("#detailTotal").textContent = book.totalCopies;
  document.querySelector("#detailAvailable").textContent = availableCopies;

  const borrowBtn = document.querySelector("#detailBorrowButton");
  if (borrowBtn) {
    borrowBtn.disabled = !isAvailable;
    borrowBtn.textContent = isAvailable ? "Borrow Book" : "Not Available";
  }

  const reviewsList = document.querySelector("#detailReviews");
  if (reviewsList) {
    reviewsList.innerHTML = book.reviews
      .map((review) => `<div class="review-item"><p>${review}</p></div>`)
      .join("");
  }
}

// ============================================================================
// BORROWING SYSTEM
// ============================================================================

function borrowBook(bookId) {
  const user = getUser();
  const book = getBooks().find((b) => b.id === bookId);

  if (!book) return;

  if (user.borrowedBooks.length >= 5) {
    showToast("You can only borrow maximum 5 books", "error");
    return;
  }

  if (user.borrowedBooks.some((b) => b.id === bookId)) {
    showToast("You already borrowed this book", "error");
    return;
  }

  const borrowDate = new Date();
  const dueDate = new Date(borrowDate);
  dueDate.setDate(dueDate.getDate() + 14);

  user.borrowedBooks.push({
    id: bookId,
    title: book.title,
    author: book.author,
    borrowDate: borrowDate.toISOString().split("T")[0],
    dueDate: dueDate.toISOString().split("T")[0],
    status: "active",
  });

  user.notifications.push({
    type: "success",
    message: `Successfully borrowed "${book.title}"`,
    date: new Date().toISOString(),
  });

  saveUser(user);
  showToast(`Successfully borrowed "${book.title}"!`);

  setTimeout(() => {
    if (window.location.pathname.includes("book-details")) {
      window.location.reload();
    }
  }, 1000);
}

function reserveBook(bookId) {
  const user = getUser();
  const book = getBooks().find((b) => b.id === bookId);

  if (!book) return;

  if (!user.reservations) user.reservations = [];

  if (user.reservations.some((b) => b.id === bookId)) {
    showToast("You already reserved this book", "error");
    return;
  }

  user.reservations.push({
    id: bookId,
    title: book.title,
    reserveDate: new Date().toISOString().split("T")[0],
  });

  user.notifications.push({
    type: "info",
    message: `Successfully reserved "${book.title}"`,
    date: new Date().toISOString(),
  });

  saveUser(user);
  showToast(`Successfully reserved "${book.title}"!`);
}

function returnBook(bookId) {
  const user = getUser();
  const loanIndex = user.borrowedBooks.findIndex((b) => b.id === bookId);

  if (loanIndex === -1) return;

  const loan = user.borrowedBooks[loanIndex];
  const returnDate = new Date().toISOString().split("T")[0];

  user.borrowHistory = user.borrowHistory || [];
  user.borrowHistory.push({
    ...loan,
    returnDate,
    status: "returned",
  });

  user.borrowedBooks.splice(loanIndex, 1);

  user.notifications.push({
    type: "success",
    message: `Successfully returned "${loan.title}"`,
    date: new Date().toISOString(),
  });

  saveUser(user);
  showToast("Book returned successfully!");

  setTimeout(() => window.location.reload(), 1000);
}

// ============================================================================
// DASHBOARD
// ============================================================================

function initDashboard() {
  updateProfileSection();
  updateBorrowedBooks();
  updateBorrowHistory();
  updateNotifications();
  updateWishlist();

  const refreshBtn = document.querySelector("#dashboardRefresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      initDashboard();
      showToast("Dashboard refreshed!");
    });
  }

  const clearNotifBtn = document.querySelector("#dashboardClearNotifications");
  if (clearNotifBtn) {
    clearNotifBtn.addEventListener("click", () => {
      const user = getUser();
      user.notifications = [];
      saveUser(user);
      updateNotifications();
      showToast("Notifications cleared!");
    });
  }
}

function updateProfileSection() {
  const user = getUser();

  const els = {
    profileName: user.name,
    profileEmail: user.email,
    profileBorrowCount: `Borrowed books: ${user.borrowedBooks.length}/5`,
    profileReservedCount: `Reserved books: ${(user.reservations || []).length}`,
  };

  Object.entries(els).forEach(([id, text]) => {
    const el = document.querySelector(`#${id}`);
    if (el) el.textContent = text;
  });
}

function updateBorrowedBooks() {
  const user = getUser();
  const tbody = document.querySelector("#borrowedTableBody");

  if (!tbody) return;

  tbody.innerHTML = user.borrowedBooks.length
    ? user.borrowedBooks
        .map((loan) => {
          const dueDate = new Date(loan.dueDate);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          let status = "active";
          if (dueDate < today) {
            status = "overdue";
          } else if (
            dueDate.getTime() - today.getTime() <
            3 * 24 * 60 * 60 * 1000
          ) {
            status = "due-soon";
          }

          const daysLeft = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));

          return `
      <tr>
        <td>${loan.title}</td>
        <td>${loan.borrowDate}</td>
        <td>${loan.dueDate}</td>
        <td><span class="status-badge status-${status}">
          ${status === "overdue" ? "Overdue" : status === "due-soon" ? "Due Soon" : "Active"}
          (${Math.abs(daysLeft)} days)
        </span></td>
        <td><button class="btn btn-sm btn-secondary" onclick="returnBook(${loan.id})">Return</button></td>
      </tr>
    `;
        })
        .join("")
    : '<tr><td colspan="5" style="text-align: center; padding: 2rem;">No borrowed books</td></tr>';
}

function updateBorrowHistory() {
  const user = getUser();
  const tbody = document.querySelector("#historyTableBody");

  if (!tbody) return;

  const history = user.borrowHistory || [];
  tbody.innerHTML = history.length
    ? history
        .slice()
        .reverse()
        .map(
          (item) => `
    <tr>
      <td>${item.title}</td>
      <td>${item.borrowDate}</td>
      <td>${item.returnDate || "-"}</td>
      <td><span class="status-badge status-${item.status}">${item.status}</span></td>
    </tr>
  `,
        )
        .join("")
    : '<tr><td colspan="4" style="text-align: center; padding: 2rem;">No history</td></tr>';
}

function updateNotifications() {
  const user = getUser();
  const list = document.querySelector("#dashboardNotifications");

  if (!list) return;

  const notifs = user.notifications || [];
  list.innerHTML = notifs.length
    ? notifs
        .slice()
        .reverse()
        .map(
          (notif) => `
    <li>${notif.message}</li>
  `,
        )
        .join("")
    : '<li style="color: var(--text-secondary); font-style: italic;">No notifications</li>';
}

function updateWishlist() {
  const user = getUser();
  const list = document.querySelector("#dashboardWishlist");

  if (!list) return;

  const wishlist = user.wishlist || [];
  list.innerHTML = wishlist.length
    ? wishlist.map((item) => `<li>${item}</li>`).join("")
    : '<li style="color: var(--text-secondary); font-style: italic;">No wishlist items</li>';
}

// ============================================================================
// ADMIN PANEL
// ============================================================================

function initAdmin() {
  updateAdminTables();

  const addBtn = document.querySelector("#adminAddBook");
  if (addBtn) {
    addBtn.addEventListener("click", addNewBook);
  }

  const refreshBtn = document.querySelector("#adminRefresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      initAdmin();
      showToast("Admin panel refreshed!");
    });
  }
}

function addNewBook() {
  const title = document.querySelector("#adminTitle").value;
  const author = document.querySelector("#adminAuthor").value;
  const category = document.querySelector("#adminCategory").value;
  const isbn = document.querySelector("#adminIsbn").value;
  const year = document.querySelector("#adminYear").value;
  const copies = document.querySelector("#adminCopies").value;
  const description = document.querySelector("#adminDescription").value;

  if (
    !title ||
    !author ||
    !category ||
    !isbn ||
    !year ||
    !copies ||
    !description
  ) {
    showToast("Please fill all fields", "error");
    return;
  }

  const books = getBooks();
  const newId = Math.max(...books.map((b) => b.id), 0) + 1;

  books.push({
    id: newId,
    title,
    author,
    category,
    isbn,
    year: parseInt(year),
    description,
    totalCopies: parseInt(copies),
    reviews: [],
  });

  saveBooks(books);

  document.querySelector("#adminTitle").value = "";
  document.querySelector("#adminAuthor").value = "";
  document.querySelector("#adminCategory").value = "";
  document.querySelector("#adminIsbn").value = "";
  document.querySelector("#adminYear").value = "";
  document.querySelector("#adminCopies").value = "";
  document.querySelector("#adminDescription").value = "";

  showToast("Book added successfully!");
  updateAdminTables();
}

function deleteBook(bookId) {
  if (!confirm("Are you sure you want to delete this book?")) return;

  const books = getBooks().filter((b) => b.id !== bookId);
  saveBooks(books);
  showToast("Book deleted successfully!");
  updateAdminTables();
}

function updateAdminTables() {
  updateAdminBooksList();
  updateBorrowRecordsTable();
  updateAdminStats();
}

function updateAdminBooksList() {
  const books = getBooks();
  const tbody = document.querySelector("#adminBooksTable");

  if (!tbody) return;

  tbody.innerHTML = books
    .map((book) => {
      const user = getUser();
      const borrowed = user.borrowedBooks.filter(
        (b) => b.id === book.id,
      ).length;
      const available = book.totalCopies - borrowed;

      return `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.totalCopies}</td>
        <td>${available}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="deleteBook(${book.id})">Delete</button>
        </td>
      </tr>
    `;
    })
    .join("");
}

function updateBorrowRecordsTable() {
  const user = getUser();
  const books = getBooks();
  const tbody = document.querySelector("#adminBorrowRecords");

  if (!tbody) return;

  const records = user.borrowedBooks.map((loan) => ({
    ...loan,
    user: user.name,
  }));

  tbody.innerHTML = records.length
    ? records
        .map(
          (record) => `
    <tr>
      <td>${record.title}</td>
      <td>${record.user}</td>
      <td>${record.borrowDate}</td>
      <td>${record.dueDate}</td>
      <td><span class="status-badge status-active">Active</span></td>
    </tr>
  `,
        )
        .join("")
    : '<tr><td colspan="5" style="text-align: center; padding: 2rem;">No active records</td></tr>';
}

function updateAdminStats() {
  const books = getBooks();
  const user = getUser();
  const overdue = user.borrowedBooks.filter(
    (b) => new Date(b.dueDate) < new Date(),
  ).length;

  const stats = {
    adminTotalBooks: books.length,
    adminActiveLoans: user.borrowedBooks.length,
    adminOverdueLoans: overdue,
    adminReservedBooks: (user.reservations || []).length,
  };

  Object.entries(stats).forEach(([id, value]) => {
    const el = document.querySelector(`#${id}`);
    if (el) el.textContent = value;
  });
}

// Export for use in HTML onclick handlers
window.borrowBook = borrowBook;
window.returnBook = returnBook;
window.deleteBook = deleteBook;
window.reserveBook = reserveBook;
