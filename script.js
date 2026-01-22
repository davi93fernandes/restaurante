const menuItems = [
  {
    id: 1,
    name: "Prato Executivo",
    category: "prato",
    description: "Arroz, feijão, carne grelhada e salada",
    price: "R$ 29,90"
  },
  {
    id: 2,
    name: "Lasanha",
    category: "prato",
    description: "Lasanha artesanal à bolonhesa",
    price: "R$ 34,90"
  },
  {
    id: 3,
    name: "Suco Natural",
    category: "bebida",
    description: "Suco natural da fruta",
    price: "R$ 8,00"
  },
  {
    id: 4,
    name: "Pudim",
    category: "sobremesa",
    description: "Pudim de leite condensado",
    price: "R$ 10,00"
  }
];

const menu = document.getElementById("menu");
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const price = document.getElementById("modal-price");
const closeBtn = document.querySelector(".close");
const filterButtons = document.querySelectorAll(".filters button");

function renderMenu(category = "all") {
  menu.innerHTML = "";
  const filtered = category === "all"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <strong>${item.price}</strong>
    `;
    div.onclick = () => openModal(item);
    menu.appendChild(div);
  });
}

function openModal(item) {
  title.textContent = item.name;
  desc.textContent = item.description;
  price.textContent = item.price;
  modal.style.display = "flex";
}

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => e.target === modal && (modal.style.display = "none");

filterButtons.forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    renderMenu(btn.dataset.category);
  };
});

renderMenu();
