import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c7b60db1759c3b91c59122eea259a5041ccf59c5732e86f411e890ed60b68075'
  }
})
