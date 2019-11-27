const ProductData = {
   title: 'FitBit 19 - Versa Special Edition',
   description: 'Meet the Fitbit Versa Special Edition— an all-day companion that helps you live your best life. This lightweight, water-resistant smartwatch empowers you to reach health and fitness goals with actionable insights, personalized guidance, on-screen workouts and more',
   colorOption: [{
         styleName: 'Black Strap',
         imageUrl: 'https://i.imgur.com/iOeUBV7.png'
      },
      {
         styleName: 'Red Strap',
         imageUrl: 'https://i.imgur.com/PTgQlim.png'
      },
      {
         styleName: 'Blue Strap',
         imageUrl: 'https://i.imgur.com/Mplj1YR.png'
      },
      {
         styleName: 'pink Strap',
         imageUrl: 'https://i.imgur.com/Zygu7I3.png'
      },
      {
         styleName: 'purple Strap',
         imageUrl: 'https://i.imgur.com/xSIK4M8.png'
      },

   ],
   featureList:[
      "Time", "Heart Rate"
   ]
}
Object.freeze(ProductData);//this line makes data const
export default ProductData; 