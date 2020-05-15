
const environment = {
    grid_size: 20,
    gravity: 1,
    fall_time:15,
    height_factor: 30,
    width_factor: 50,
    frame_rate:20,
    color_scheme:[
        '#ed3b21',
        '#ffc719',
        '#2db928',
        '#f6f6f5',
        '#30c39e',
        '#8db9ca',
        '#ff4f81'
    ],
    background_color:'#333333',
    gridlines_color:'#555555',

}
function setup() {
    createCanvas(environment.grid_size * environment.width_factor,
        environment.grid_size * environment.height_factor);
}

var prop = new block(parseInt(((Math.random() * 1000) % environment.width_factor * environment.grid_size) /
    environment.grid_size) * environment.grid_size, -(environment.grid_size * 3),
    (Math.random() * 1000) % environment.color_scheme.length)

function cell(x,y) {
    this.x = x
    this.y = y
    this.state = false
}

function draw() {
    frameRate(environment.frame_rate)
    background(environment.background_color);
    noFill();
    stroke(environment.gridlines_color)
    let grid_space = []
    let temp
    for (i = 0; i < screen.width; i += environment.grid_size){
        temp=[]
        for (j = 0; j < screen.height; j += environment.grid_size){
            temp.push(new cell(i,j))
            rect(i,j, environment.grid_size, environment.grid_size)        
        }
        grid_space.push(temp)
    }
    // console.log(grid_space)
    prop.render_block()

    //fall-down script:=
    if (frameCount % environment.fall_time == 0) {
        // console.log(frameCount)
        if (prop.start_coordinates[1]<environment.grid_size*(environment.height_factor-3)) {
            prop.start_coordinates[1]+=environment.grid_size*environment.gravity
        }
    }
    remote_control()    
}
let remote_control = () => {
    collision_monitor()
    if (keyIsDown(LEFT_ARROW)) { 
        // if (prop.start_coordinates[0] > 0) {
            if (prop.motion_left) {
                prop.start_coordinates[0] -= environment.grid_size
                block_section_coordinate_update(prop.start_coordinates)
        }
    }

    if (keyIsDown(UP_ARROW)) {
        // if (prop.start_coordinates[1]>0) {
            if (prop.motion_up) {
                prop.start_coordinates[1] -= environment.grid_size
                block_section_coordinate_update(prop.start_coordinates)    
                
        }
     }
    if (keyIsDown(RIGHT_ARROW)) { 
        // if (prop.start_coordinates[0] < environment.grid_size *( environment.width_factor-3)) {
            if (prop.motion_right) {
                prop.start_coordinates[0] += environment.grid_size
                block_section_coordinate_update(prop.start_coordinates)
        }
    }

    if (keyIsDown(DOWN_ARROW)) {
        // if (prop.start_coordinates[1]<environment.grid_size*(environment.height_factor-3)) {
            if (prop.motion_down) {
                prop.start_coordinates[1] += environment.grid_size
                block_section_coordinate_update(prop.start_coordinates)
        }
    }
}



function keyPressed() {
    if (keyCode == 32) {
        console.log("space pressed!")
    }
}

var block_section_coordinate_update = (coordinates) => {
    x = coordinates[0]
    y=coordinates[1]
    for (i = 0; i < prop.grid.length; i += 1){
        for (j = 0; j < prop.grid[0].length; j += 1){
            prop.grid[i][j].coordinates[0] = x + (i * environment.grid_size)
            prop.grid[i][j].coordinates[1] = y + (j * environment.grid_size)
            
        }
    }
    console.log()
}
var collision_monitor = () => {
    prop.grid.forEach((j) => {
        // console.log(j)
        j.forEach((i) => {
            let x = i.coordinates[0]
            let y = i.coordinates[1]


            if (frameCount == 50) {
                console.log(x,y)    
            }
            

            if (x >= (environment.width_factor-1) * (environment.grid_size)) {
                prop.motion_right=false
            } else {
                prop.motion_right=true
            }
            if (y >= (environment.height_factor-1) * (environment.grid_size)) {
                prop.motion_down=false
            } else {
                prop.motion_down=true
            }
            if (x <=0) {
                prop.motion_left=false
            } else {
                prop.motion_left=true
            }
            if (y <= 0) {
                prop.motion_up=false
            } else {
                prop.motion_up=true
            }
        })
    })
}