function filterCategory(filterSelection, filterBy, filterButton){
    // Set up filterselection to divide the categories
    //   set up filterby to create matches for the content in the category
     //   set the fliter button to set the default button for the filtered content
    
     let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
        //Display different content depending on the fliter button set

        for(let listItem of itemsToFilter){
            
            if(listItem.dataset[filterBy] === filterSelection){
                listItem.style.display = "flex"
            }else{
                listItem.style.display = "none"
            }
        }
    // set variables
    let filterSelectors = Array.from(document.getElementsByClassName("FilterSelector"));
 
        for(let selector of filterSelectors){

            selector.classList.remove("ActiveCategory"); // class name
        }
            filterButton.classList.add("ActiveCategory");
}

        


