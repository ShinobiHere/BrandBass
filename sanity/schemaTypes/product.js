export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name:'name',
            type:'string',
            title:'Product Name',

        },
        {
            name:'slug',
            type:'slug',
            title:'Product Slug',
            options:{
                source: 'name',
            }

        },
        
        {
            name:'image',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}]
        },
        {
            name:'category',
            title:'Product Category',
            type:'reference',
            to:[{type:'category'}]
        },
        {
            name:'description',
            type:'text',
            title:'Product Description',

        },
        {
            name:'price',
            type:'number',
            title:'Price',
        },
        {
            name:'price_id',
            title:'Stripe Price ID',
            type:'string',
        }

    ]
}