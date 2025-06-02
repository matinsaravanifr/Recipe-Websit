import axios from 'axios'
import React from 'react'

export const apicall= axios.create({
  baseURL:'https://www.themealdb.com/api/json/v1/1',
  timeout:10000,
})
