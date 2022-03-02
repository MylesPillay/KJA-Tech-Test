// global elements

const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");
const productImage = document.getElementById("product-image");
let blackShirt = document.getElementById("colour-selector__black");
let greyShirt = document.getElementById("colour-selector__grey");
let whiteShirt = document.getElementById("colour-selector__white");
let allColours = document.getElementById("colours");
let smallSizes = document.querySelectorAll(".smalls");
let largeSizes = document.querySelectorAll(".extra-large");


// METHODS

// resets 
clearCurrentPrice = () => {
    productPrice.innerHTML = ""
};
resetTrioPrice = () => {
    productPrice.innerHTML = "£111.01"
};
blackActive = () => {
    greyShirt.classList.remove('active');
    whiteShirt.classList.remove('active');
}
greyActive = () => {
    blackShirt.classList.remove('active');
    whiteShirt.classList.remove('active');
}
whiteActive = () => {
    blackShirt.classList.remove('active');
    greyShirt.classList.remove('active');
}
resetTitle = () => {
    productTitle.innerHTML = "3 Pack of KJA T-Shirts"
}
resetImage = () => {
    document.getElementById("product-image").src = "images/all-shirts.jpg"
}

removeActive = () => {
    clearCurrentPrice()
    resetTrioPrice()
    resetTitle()
    resetImage();
}

// change the displayed price

updateActive = () => {
    clearCurrentPrice()
    updatePrice()
    changeTitle()
    changeImage();
}
updatePrice = () => {
    if (blackShirt.classList.contains('active')) {
        return productPrice.innerHTML = "£39.99"
    }
    if (greyShirt.classList.contains('active')) {
        return productPrice.innerHTML = "£40.99"
    }
    if (whiteShirt.classList.contains('active')) {
        return productPrice.innerHTML = "£44.99"
    }
}

// change product 
changeTitle = () => {
    if (blackShirt.classList.contains('active')) {
        return productTitle.innerHTML = "Single Black KJA T-shirt"
    }
    if (greyShirt.classList.contains('active')) {
        return productTitle.innerHTML = "Single Grey KJA T-shirt"
    }
    if (whiteShirt.classList.contains('active')) {
        return productTitle.innerHTML = "Single White KJA T-shirt"
    }
    if (!allColours.classList.contains('active')) {
        return productTitle.innerHTML = "3 Pack of KJA T-shirts"
    }
}

changeImage = () => {
    if (blackShirt.classList.contains('active')) {
        return document.getElementById("product-image").src = "images/black-shirt.jpg"
    }
    if (greyShirt.classList.contains('active')) {
        return document.getElementById("product-image").src = "images/grey-shirt.jpg"
    }
    if (whiteShirt.classList.contains('active')) {
        return document.getElementById("product-image").src = "images/white-shirt.jpg"
    }
}

/*  change sizes - unfinished
 availableShirts = () => {
    if (greyShirt.classList.contains('active')) {
        return smallSizes.classList.add('product__size-cell--greyed').remove('product__size-cell');
            }
    if (whiteShirt.classList.contains('active')) {
        return largeSizes.classList.remove('product__size-cell').add('product__size-cell--greyed');
            }    
         }
*/

// event listeners
blackShirt.addEventListener('click', () => {
    if (blackShirt.classList.contains('active')) {
        console.log("clicked")
        removeActive();
        resetAvailableSizes();
        blackShirt.classList.remove('active')
    }
    else {
        console.log("clicked")
        blackShirt.classList.add('active');
        blackActive()
        updateActive()
    }
});

greyShirt.addEventListener('click', () => {
    if (greyShirt.classList.contains('active')) {
        greyShirt.classList.remove('active')
        removeActive();
    }
    else {
        greyShirt.classList.add('active');
        greyActive()
        updateActive()
    }
});
whiteShirt.addEventListener('click', () => {
    if (whiteShirt.classList.contains('active')) {
        whiteShirt.classList.remove('active')
        removeActive();
        whiteShirt.classList.remove('active')
    }

    else {
        whiteShirt.classList.add('active');
        whiteActive()
        updateActive()
    }
})
