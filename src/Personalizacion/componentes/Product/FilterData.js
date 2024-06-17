export const filters = [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: false },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'marca',
      name: 'Marca',
      options: [
        { value: 'artesanales', label: 'Artesanales', checked: false },
        { value: 'italo', label: 'Italo', checked: false },
      ],
    },
  ]
export const singleFilter =[
  {
    id: "price",
    name: "Precio",
    options: [
      {value: "5000-10000", label:"$5000-$10000", checked: false},
      {value: "10000-15000", label:"$10000-$20000"},
      {value: "15000-20000", label:"$20000-$30000"},
      {value: "20000-25000", label:"$30000-$40000"},
      {value: "30000-35000", label:"$40000-$50000"},
    ],
  },
  {
    id: "disccount",
    name: "Descuento",
    options: [
      {value: "10", label:"10% And Abode"},
      {value: "20", label:"20% And Abode"},
      {value: "30", label:"30% And Abode"},
      {value: "40", label:"40% And Abode"},
      {value: "50", label:"50% And Abode"},
      {value: "60", label:"60% And Abode"},
      {value: "70", label:"70% And Abode"},
      {value: "80", label:"80% And Abode"},
    ],
  },
  {
    id: "stock",
    name: "Disponibilidad",
    options: [
      {value: "in_stock", label:"En Stock"},
      {value: "out_of_stock", label:"Agotado"},
    ],
  },
]