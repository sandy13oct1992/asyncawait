 const post = [{title:'post1'}]
 
const convert = async () => {
    // const post = {title:'post1'}
    const creatPost2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push({title:'post2'})
        });
        resolve();
    })
     const cpost= new Promise((resolve, reject) => 
     { post.push({title:'post3'});
      resolve("post")})

    let post3= await cpost;
    // is it possible to push in sngle line code

        console.log(`${post3}`);

        // function DeletePost() {
        //     return new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         Posts.pop();
        //         resolve();
        //       }, 1000);
        //     });
        //   }

    // const delet = new Promise((Resolve , reject) => {
    //     setTimeout (() => {
    //         if(post.length>0){
    //             const poppedElement = post.pop();
    //             resolve(poppedElement);
    //         }
    //         else{
    //             reject( "ERROR: ARRAY IS EMPTY");
    //         }
    //     })
    // })
    // const popped = await delet;
    let post2= await cpost;
    console.log(`${post2}`);
    return post2;
    
}
convert().then((m) => console.log(m));

function DeletePost() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                post.pop();
                resolve();
              }, 1000);
            });
          }

          DeletePost().then((dpost)  =>{
          console.log(dpost.title);
          } )