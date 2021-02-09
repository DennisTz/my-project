var images=["images/travel1.jpg", "images/greece.jpg", "images/london.jpg"], i=0;   
a1="With over 6,000 miles of coastline, you are spoiled for choice in Mexico. We show the best places to go when you’re looking for sea and sunshine…"; 
a2="Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. ";  
a3="As the world leader in travel experiences, we connect you to the real England in a way like no other. Crumbling castles, historic villages, vibrant cities and vast landscapes, on each English path we take you down, a dynamic experience awaits. "
var images1=[a1, a2, a3], j=0;    //declare array of pictures

next();
next1();

function next() {													//define function to move pictures forward
                var imgElement = document.getElementById("image");  //point to img element with id=image
                imgElement.src=images[i+1];							// assign to it next array element(picture) with the index i+1
                i++;
                if (i>=images.length) {								//if index is more than array of images length than assign to imgElement picture with index 0
                                        imgElement.src=images[0];
                                        i=0;
                                      }
                 setTimeout(next, 5000);					  
                }

    
    function next1() {													//define function to move pictures forward
                    var imgElement1 = document.getElementById("image1").innerHTML;  //point to img element with id=image
                    imgElement1=images1[j+1];							// assign to it next array element(picture) with the index i+1
                    j++;
                    if (j>=images1.length) {								//if index is more than array of images length than assign to imgElement picture with index 0
                                            imgElement1=images1[0];
                                            j=0;
                                          }
                                          document.getElementById("image1").innerHTML=imgElement1;
                     setTimeout(next1, 5000);					  
                    }

  