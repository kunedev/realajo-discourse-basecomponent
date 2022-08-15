
 <script type="text/discourse-plugin" version="0.1">   

  api.decorateCooked($elem => $elem.css({ backgroundColor: 'yellow' }));
  
  api.onPageChange((url, title) => { 
    console.log('user navigated! ' + url);

    var blnIsCategory = false;
    var blnIsTopic = false;
    var blnIsGroup = false; 
    var blnIsHomepage = false; 
    var strHomepageView = "";
    
    // ---------- homepage check  ------------
    
    if (url == "/")   {                // if there's no match for this pattern then there is nothing after the ".com/" (or other tld)
       blnIsHomepage = true;
       strHomepageView = "home";
    }
    
    if (url == "/latest") {
       blnIsHomepage = true;
       strHomepageView = "latest";
    }
    if (url == "/categories") {
       blnIsHomepage = true;
       strHomepageView = "categories";
    }
    if (url == "/top") {
       blnIsHomepage = true;
       strHomepageView = "top";
    }
    
    // ---------- end of homepage check  ------------

    // ---------- other pagetype checks  ------------

    var res = url.match(/\/t\/(.*?)\/(\w+)/);       // check for topic id
    if (res && res[2] > 0) {
        console.log("topic " + res[2]);
        var blnIsTopic = true;
        var thisTopicID = res[2];
    }

    console.log("about to check url " + url);
    var res = url.match(/(\/g)\/(\w+)/);      // check for group id
    if (res !== null) {
        var blnIsGroup = true;
        var thisGroupName = res[2];
        console.log("Is group. " + thisGroupName);
    }
 
    var res = url.match(/\/c\/(.*?)\/(\d+)/);       // category page check: check for category id position 2
    if (res && res[2] > 0) {
        var blnIsCategory = true;
        var thisCategoryID = res[2];
    }
 
    var res = url.match(/\/c\/(.*?)\/(\w+)\/(\d+)/);       // category page check:  check for category id  position 3
    if (res && res[3] > 0) {
        var blnIsCategory = true;
        var thisCategoryID = res[3];
    }

    var res = url.match(/\/c\/(.*?)\/(\w+)\/(\w+)\/(\d+)/);       // category page check:  check for category id  position 4
    if (res && res[4] > 0) {
        var blnIsCategory = true;
        var thisCategoryID = res[4];
    }

    // ---------- end of other pagetype checks  ------------
    
    // nb the common all-page items don't get reset per page afaik 

    var kCustomSidebar = document.getElementById('ksidebardiv');
    
    var kCustomTopicField = document.getElementsByClassName('topic-title-custom-field-container')[0];
    var kCustomCategoryField = document.getElementsByClassName('category-custom-field-textarea')[0];

    var kTargetTopicField = document.getElementById('k-topic-above-suggested');
    var kTargetCategoryField = document.getElementById('k-discovery-below');
    

    if (blnIsCategory) {
        
            document.getElementById('k-discovery-list-controls-above').innerHTML = "";     // emptying it because it may have been set by Homepage. 
            document.getElementById('k-discovery-list-container-top').innerHTML = "";     // emptying it because it may have been set by Homepage. 
            // reset other shared fields also 
            // no need to reset where they are set by a subsequent line below 

            console.log("category " + thisCategoryID);
            var main = document.getElementById('k-discovery-list-container-top');
            var externalHTML = url + " :  Category id: " + thisCategoryID ;
            main.innerHTML = externalHTML;
            
            if (kCustomSidebar !== null) {
                kCustomSidebar.innerHTML = externalHTML;
            }

                       
            kTargetCategoryField.innerHTML = kCustomCategoryField.innerHTML;    // for demo purposes: show custom field here.
            

        var kCustomTopicField = document.getElementsByClassName('topic-title-custom-field-container')[0];
        var kTargetTopicField = document.getElementById('topic-above-suggested');
        
    
    } else if (blnIsHomepage) {      //  NB this is closely related to 

            document.getElementById('k-discovery-list-controls-above').innerHTML = "";     // emptying it because it may have been set by Category page. 
            document.getElementById('k-discovery-list-container-top').innerHTML = "";     // emptying it because it may have been set by Category page. 
            // reset other shared fields also 
            // no need to reset where they are set by a subsequent line below 

            var main = document.getElementById('k-discovery-list-controls-above');
            var externalHTML = url + " Homepage type: " + strHomepageView ;
            main.innerHTML = externalHTML;
            
            if (kCustomSidebar !== null) {
                kCustomSidebar.innerHTML = externalHTML;
            }
            
    } else if (blnIsTopic) {
            const main = document.getElementById('k-topic-title');
            const externalHTML = url + " :  Topic id: " + thisTopicID ;
            main.innerHTML = externalHTML;
            
            if (kCustomSidebar !== null) {
                kCustomSidebar.innerHTML = externalHTML;
            }
            
            kTargetTopicField.innerHTML = kCustomTopicField.innerHTML;  // test .. apply content of custom field to another text holder
            
    } else if (blnIsGroup) {    // currently not being set as true at all 
            const main = document.getElementById('k-group-reports-nav-item');
            main.innerHTML = thisGroupName;
            
            
    } else {    // some other page
        
    }
 

 
  })


 </script>   // opposite end of "commenting out"

