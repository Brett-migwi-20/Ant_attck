
var controls;
let red = "#ca1313"
let green = "#066106"
// Create a scene
const scene = new THREE.Scene();

// Lights 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

// Setting up camera
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, // left
  cameraWidth / 2, // right
  cameraHeight / 2, // top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane
);
camera.position.set(100, 100, 50)
camera.lookAt(0,30,0);

// Resize window functionality
window.addEventListener("resize", function(){
  var W = window.innerWidth;
  var H = window.innerHeight;
  renderer.setSize(W,H);
  camera.aspect = W/H;
  camera.updateProjectionMatrix();
 
})




// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);


// Creating Ant Body parts

function createHead (color){
    // Skull
    const antSkull = new THREE.Group()

    // head
    const geometry = new THREE.OctahedronGeometry(2.8,0)
    const material =new THREE.MeshPhongMaterial({color: (color == "red")?red:green})
    const head = new THREE.Mesh(geometry,material)
    // head.rotation.z = 5

    // create the eyes
    const circle = new THREE.CircleGeometry(0.9)
    const circleColor = new THREE.MeshPhongMaterial({color: 0x000000})
    const eye = new THREE.Mesh(circle,circleColor)
    const eye2 = new THREE.Mesh(circle,circleColor)
    eye.position.x = 2
    eye.position.y = 0.5
    eye.position.z = 0.5
    eye.rotation.y = 7.1

    eye2.position.x = 2
    eye2.position.y = 0.5
    eye2.position.z = -1
    eye2.rotation.x = 10
    eye2.rotation.y = 7


    // Tails 
    const geometryTail = new THREE.OctahedronGeometry(6,0)
    const tail = new THREE.Mesh(geometryTail,material)
    tail.position.x = -31


    // Anteners
    const geoAntener = new THREE.ConeBufferGeometry(0.6,2.5,4)
    const antener = new THREE.Mesh(geoAntener,material)
    const antener1 = new THREE.Mesh(geoAntener,material)
    const antener2 = new THREE.Mesh(geoAntener,material)
    const antener3 = new THREE.Mesh(geoAntener,material)

    antener.position.x = 1
    antener.position.z = 2.8
    antener.rotation.z = -5

    antener1.position.x = 1
    antener1.position.z = -2.8
    antener1.rotation.z = -5

    antener2.position.x = 3.2
    antener2.position.z = -2.3
    antener2.position.y = -0.5
    antener2.rotation.z = -1.7
    antener2.rotation.y = -0.4

    antener3.position.x = 3.2
    antener3.position.z = 2.4
    antener3.rotation.z = -1.7
    antener3.position.y = -0.5
    antener3.rotation.y = 0.4


    antSkull.add(head)
    antSkull.add(antener)
    antSkull.add(antener1)
    antSkull.add(antener2)
    antSkull.add(antener3)
    antSkull.add(tail)
    antSkull.add(eye)
    antSkull.add(eye2)



    return antSkull;
}  

function CreateThorax(color){
    const thorax = new THREE.Group()

    const geometry = new THREE.ConeGeometry( 4, 4, 4 );
    const material = new THREE.MeshPhongMaterial( {color: (color == "red")?red:green}  );
    const cone = new THREE.Mesh( geometry, material );
    const cone2 = new THREE.Mesh( geometry, material );

    cone.rotation.z = -1.6
    cone.rotateY(1.5)
    cone.position.x = -4.6

    cone2.rotation.z = -4.7
    cone2.rotateY(-1.5)
    cone2.position.x = -23.5




    const box = new THREE.BoxBufferGeometry(5.4,5.4,15)
    const thoraxlength = new THREE.Mesh(box,material)

    thoraxlength.position.x = -14
    thoraxlength.rotateX(0.7)
    thoraxlength.rotation.y = 4.7


    // Legs 
    // Right side
    function legs(color) {
    const legGroup = new THREE.Group()
    const balckFeet = new THREE.MeshPhongMaterial({color:0x000000})
    const geoLegR = new THREE.ConeBufferGeometry(1,5,4)
    const legR1 = new THREE.Mesh(geoLegR,material)
    const legR2 = new THREE.Mesh(geoLegR,material)
    const legR3 = new THREE.Mesh(geoLegR,material)
    const legR4 = new THREE.Mesh(geoLegR,material)

    const geoLegRt = new THREE.ConeBufferGeometry(1,2,4)
    const legR5 = new THREE.Mesh(geoLegRt,balckFeet)
    const legR6 = new THREE.Mesh(geoLegRt,balckFeet)

    legR1.position.z = 6
    legR1.position.y = 1
    legR1.position.x = -8
    legR1.rotation.x = -2
  

    legR2.position.z = 10
    legR2.position.x = -8
    legR2.position.y = 3.4
    legR2.rotateX(0.95)

    legR3.position.z = 14
    legR3.position.x = -8
    legR3.position.y = 3.4
    legR3.rotation.x = -1

    legR4.position.z = 18
    legR4.position.x = -8
    legR4.position.y = 0.5
    legR4.rotateX(2.3)

    legR5.position.z = 22
    legR5.position.x = -8
    legR5.position.y = 0
    legR5.rotation.x = -5

    legR6.position.z = 20
    legR6.position.x = -8
    legR6.position.y = -0.5
    legR6.rotation.x = -2


    legGroup.add(legR1)
    legGroup.add(legR2)
    legGroup.add(legR3)
    legGroup.add(legR4)
    legGroup.add(legR5)
    legGroup.add(legR6)
      

    return legGroup
    }
    // Right side
    function legs2(color) {
      const legGroup = new THREE.Group()
      const geoLegR = new THREE.ConeBufferGeometry(1,5,4)
      const legR1 = new THREE.Mesh(geoLegR,material)
      const legR2 = new THREE.Mesh(geoLegR,material)
      const legR3 = new THREE.Mesh(geoLegR,material)
      const legR4 = new THREE.Mesh(geoLegR,material)

      const geoLegRt = new THREE.ConeBufferGeometry(1,2,4)
      const balckFeet = new THREE.MeshPhongMaterial({color:0x000000})
      const legR5 = new THREE.Mesh(geoLegRt,balckFeet)
      const legR6 = new THREE.Mesh(geoLegRt,balckFeet)

      legR1.position.z = -5.5
      legR1.position.x = -8
      legR1.rotation.x = -4.5

      legR2.position.z = -10
      legR2.position.x = -8
      legR2.position.y = 1.3
      legR2.rotation.x = -7.5

      legR3.position.z = -14
      legR3.position.x = -8
      legR3.position.y = 0.5
      legR3.rotation.x = -5.5

      legR4.position.z = -17.2
      legR4.position.x = -8
      legR4.position.y = -2.8
      legR4.rotation.x = -2.4

      legR5.position.z = -19.6
      legR5.position.x = -8
      legR5.position.y = -4.9
      legR5.rotation.x = -5

      legR6.position.z = -21.5
      legR6.position.x = -8
      legR6.position.y = -5.5
      legR6.rotation.x = -2


  
      
      legGroup.add(legR1)
      legGroup.add(legR2)
      legGroup.add(legR3)
      legGroup.add(legR4)
      legGroup.add(legR5)
      legGroup.add(legR6)
        
  
      return legGroup
      }
    
    const fisrtLeg = new legs()
    const secondLeg = new legs()
    const thirdLeg = new legs()
    const fourthLeg = new legs2()
    const fiveLeg = new legs2()
    const sixLeg = new legs2()

    fisrtLeg.rotation.y = 0.2
    fisrtLeg.position.z = -1

    secondLeg.position.x =  -6
    thirdLeg.position.x =  -12

    fiveLeg.position.x =  -6
    sixLeg.position.x =  -12
  

    thorax.add(fisrtLeg)
    thorax.add(secondLeg)
    thorax.add(thirdLeg)
    thorax.add(fourthLeg)
    thorax.add(fiveLeg)
    thorax.add(sixLeg)
    thorax.add(cone)
    thorax.add()
    thorax.add(cone2)
    thorax.add(thoraxlength)

    return thorax
   
}
function wholeAntBody(color) {
  const wholeBody = new THREE.Group()
  const thorax = CreateThorax(color)
  const ant =createHead(color);

  wholeBody.add(ant)
  wholeBody.add(thorax)
  wholeBody.position.x = -4

return   wholeBody 
}

const redAnt = new wholeAntBody("red")
const greenAnt = new wholeAntBody("green")

greenAnt.position.x = -35
greenAnt.position.z = 40

redAnt.position.z = -40
redAnt.position.x = -5
redAnt.rotation.y = 5


scene.add(redAnt);
scene.add(greenAnt);

renderer.render(scene, camera);

controls = new THREE.OrbitControls(  
  camera, 
  renderer.domElement
);

// const axesHelper = new THREE.AxesHelper( 50 );
// scene.add( axesHelper );

// Adding plane fild
const geometry = new THREE.PlaneGeometry( 1000, 1000 );
const material = new THREE.MeshBasicMaterial( {color: 0x7CFC00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
plane.rotateX(4.7)
plane.position.y = -5
scene.add( plane );



// KeyBord Interactuions 
document.onkeydown =  async function (e) { 
  if (e.keyCode == 87) {
    // Move forward
     greenAnt.position.x += 1
    
  }
   if(e.keyCode == 65){
    // move left
    greenAnt.position.z += 1
  }
   if(e.keyCode == 68){
    // move left
    greenAnt.position.z -= 1
  }
   if(e.keyCode == 83){
    // move left
    greenAnt.position.x -= 1
  }

  // Control the red ant 
   if(e.keyCode == 38){
    // move left
    redAnt.position.x -= 1
  }
   if(e.keyCode == 37){
    // move left
    redAnt.position.z += 1
  }
   if(e.keyCode == 40){
    // move left
    redAnt.position.x += 1
  }
   if(e.keyCode == 39){
    // move left
    redAnt.position.z-= 1
  }

  if(greenAnt.position.distanceToSquared(redAnt.position) <= 600){
    lifeGren.style.width = `${count -= 1}%`
    lifeRed.style.width = `${count -= 1}%`
  }
  if(lifeGren.clientWidth <= lifeGreenWidth *0.7){
      lifeGren.style.backgroundColor = "yellow"
  }
  if(lifeGren.clientWidth <= lifeGreenWidth *0.3){
      lifeGren.style.backgroundColor = "red"
  }

  if(lifeRed.clientWidth <= lifeRedWidth *0.7){
      lifeRed.style.backgroundColor = "yellow"
  }
  if(lifeRed.clientWidth <= lifeRedWidth *0.3){
      lifeRed.style.backgroundColor = "red"
  }
  
 }

//  Collision Detection in the two ants
var boundingBoxHelperRed = new THREE.BoxHelper(redAnt,0xffff00)
var boundingBoxHelperGreen= new THREE.BoxHelper(greenAnt,0xffff00)


scene.add(boundingBoxHelperRed)
scene.add(boundingBoxHelperGreen)



// Life bar change
let count = 100
let lifeGren = document.querySelector("#life-green")
let lifeRed = document.querySelector("#life-red")
const lifeGreenWidth = lifeGren.clientWidth;
const lifeRedWidth = lifeGren.clientWidth;



function animate(){
  requestAnimationFrame(animate);
  boundingBoxHelperRed.update()
  boundingBoxHelperGreen.update()
  renderer.render(scene,camera);
}
animate()
