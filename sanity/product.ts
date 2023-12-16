export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image'
      },
      {
        name:"category",
        title:"Product Category",
        type:"reference",
        to:[{
          type: "category"
        }]
      }
    
    ]
  }