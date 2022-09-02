export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name', // name of the client that wrote the testimonial
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company', // company of the client
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imgurl', // image of the client
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true, // feature to edit the image as the developer please
      },
    },
    {
      name: 'feedback', // feedback / testimonial of the client
      title: 'Feedback',
      type: 'string',
    },
  ],
}
