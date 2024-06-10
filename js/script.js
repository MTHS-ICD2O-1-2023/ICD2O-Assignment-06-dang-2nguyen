// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

async function getDogImage() {

  try {
    const resultJSON = await fetch("https://dog.ceo/api/breeds/image/random")
    const jsonData = await resultJSON.json()
    
    const firstDataSet = jsonData.message

    document.getElementById("dog-image").src = firstDataSet
  } catch (error) {
    console.error(error)
  }
}