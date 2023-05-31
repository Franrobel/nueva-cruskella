const carta = [{
    entrantes: [{
        nombre: "Suppli de Mozzarella",
        ingredientes: "bolita rebozada de arroz con salsa de tomate y un corazón de mozzarela",
        precio: "€ 1,50",
        gluttenFree: false
    },
    {
        nombre: "Suppli de Carne",
        precio: "€ 2,00",
        gluttenFree: false
    },
    {
        nombre: "Lasagna de Verduras ó Carne",
        precio: "€ 6,00", 
        gluttenFree: false
    },
    {
        nombre: "Ensaladas",
        precio: "€ 8,00 a € 9,00", 
        gluttenFree: false
    }
    ],
    pizzas: [{
        nombre: "Marinara *",
        ingredientes: "salsa de tomate, ajo y orégano",
        precio: "€ 6,00",
        gluttenFree: false
    },
    {
        nombre: "Margherita",
        ingredientes: "salsa de tomate, mozzarella, albahaca",
        precio: "€ 7,00",
        gluttenFree: true

    },
    {
        nombre: "campeona",
        ingredientes: "salsa de tomate, mozzarella y champiñón",
        precio: "€ 8,00",
        gluttenFree: true
    },
    {
        nombre: "la Daria *",
        ingredientes: "salsa de tomate, champiñón, cebolla roja, aceituna y orégano",
        precio: "€ 8,00",
        extra: "€ 9,00",
        gluttenFree: false
    },
    {
        nombre: "Jamón y Queso",
        ingredientes: "salsa de tomate, mozzarella y jamón cocido",
        precio: "€ 8,50",
        extra: "€ 9,50",
        gluttenFree: true
    },
    {
        nombre: "Jamón Serrano y Queso",
        ingredientes: "salsa de tomate, mozzarella y jamón serrano",
        precio: "€ 9,50",
        gluttenFree: false
    },
    {
        nombre: "La Grana",
        ingredientes: "mozzarella, tomate cherry, rúcula, grana padano",
        precio: "€ 9,00",
        gluttenFree: true
    },
    {
        nombre: "Parmigiana",
        ingredientes: "salsa de tomate, mozzarella, berenjena, gana padano y aceite de albahaca",
        precio: "€ 9,50",
        gluttenFree: false
    },
    {
        nombre: "Cinco Quesos",
        ingredientes: "mozzarella, queso scamorza ahumado, queso azul, ricotta y grana padano",
        precio: "€ 10,00",
        gluttenFree: false
    },
    {
        nombre: "La Lucifera *",
        ingredientes: "grelos champiñón, tomate seco, aceite picante",
        precio: "€ 10,00",
        extra: "€ 11,00",
        gluttenFree: true
    },
    {
        nombre: "Cacio e Pepe",
        ingredientes: "salsa de tomate, mozzarella, queso scamorza ahumado y pimienta negra",
        precio: "€ 10,00",
        gluttenFree: false
    },
    {
        nombre: "Diavola",
        ingredientes: "salsa de tomate, mozzarella, chorizo fresco, chorizo seco y aceite picante",
        precio: "€ 10,50",
        gluttenFree: false
    },
    {
        nombre: "La Sandra",
        ingredientes: "mozzarella, queso azul, champiñón, cebolla caramelizada, rúcula y grana padano",
        precio: "€ 12,00",
        gluttenFree: false
    },
    {
        nombre: "Sobrassada",
        ingredientes: "mozzarella, ricotta, sobrassada en salsa de tomate, chorizo fresco y rúcula",
        precio: "€ 12,00",
        gluttenFree: false
    },
    {
        nombre: "La Cabra",
        ingredientes: "salsa de tomate, mozzarella, berenjena, queso de cabra y cebolla caramelizada",
        precio: "€ 11,00",
        gluttenFree: false
    },
    {
        nombre: "Diego",
        ingredientes: "salsa de tomate, mozzarella, anchoas, aceituna y orégano",
        precio: "€ 11,00",
        gluttenFree: false
    },
    {
        nombre: "La Chicha",
        ingredientes: "mozzarella, champiñón, salchicha y grelos",
        precio: "€ 12,00",
        gluttenFree: false
    },
    {
        nombre: "La Fulvia",
        ingredientes: "mozzarella, burrata, tomatee cherry, grana padano, vinagre balsámico en crema y rúcula",
        precio: "€ 13,00",
        gluttenFree: false
    },
    {
        nombre: "La Marianna",
        ingredientes: "mozzarella, queso de cabra, cebolla roja, alcaparras y rúcula",
        precio: "€ 12,00",
        gluttenFree: false
    },
    {
        nombre: "Porchina",
        ingredientes: "mozzarella, setas ceps y grana padano",
        precio: "€ 13,00",
        gluttenFree: false
    },
    {
        nombre: "La Capricciosa",
        ingredientes: "salsa de tomate, mozzarella, champiñón, jamón cocido, alcachofas y aceituna negra",
        precio: "€ 13,50",
        gluttenFree: false
    },
    {
        nombre: "La Lola",
        ingredientes: "salsa de tomate, burrata, aceituna y tomate seco",
        precio: "€ 13,50",
        gluttenFree: false
    },
    {
        nombre: "La Serrano Azul",
        ingredientes: "mozzarella, queso azul, jamón serrano y nueces",
        precio: "€ 14,00",
        gluttenFree: false
    },
    {
        nombre: "Ela - Ela - Op",
        ingredientes: "mozzarella, scamorza, rúcula, anchoas y mermelada de tomate",
        precio: "€ 14,00",
        gluttenFree: false
    },
    {
        nombre: "La Kelo",
        ingredientes: "burrata, mozzarella, jamón serrano, tomate cherry, rúcula y grana padano",
        precio: "€ 14,00",
        gluttenFree: false
    },
    {
        nombre: "La Diana",
        ingredientes: "mozzarella, setas ceps y salchicha",
        precio: "€ 14,50",
        gluttenFree: false
    },
    {
        nombre: "La Clara",
        ingredientes: "salsa de tomate, setas ceps y salsa de trufa",
        precio: "€ 15,00",
        gluttenFree: false
    },
    {
        nombre: "Artemisia",
        ingredientes: "mozzarella, queso scamorza ahumado, ricotta, rúcula, tomate seco y panceta",
        precio: "€ 15,00",

        gluttenFree: false
    },
    ],
    pizzasEstacion: {},
    postres: [{
        nombre: "Tiramisu",
        precio: "€ 4,00"
    },
    {
        nombre: "Tarta de queso con fresa",
        precio: "€ 4,00"
    },
    {
        nombre: "La Dolce Vita *",
        ingredientes: "pizza con crema de cacao, avellanas y nueces",
        precio: "€ 7,00",
        extra: "€ 7,00"
    }]

}
]

export default carta