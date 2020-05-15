var blocks = [
    Z_block,
    T_block,
    C_block,
    I_block,
    J_block,
    F_block,
    E_block,
    L_block,
    M_block,
    plus_block,
    fwd_block,
    up_block,
    kite_block
]
class block{
    constructor(x, y, colorCode) {

        this.grid = []
        this.motion_right = true
        this.motion_left = true
        this.motion_up = true
        this.motion_down = true
        this.start_coordinates = [x, y]
        this.color = environment.color_scheme[parseInt(colorCode)]    
        
        let block_map = new blocks[parseInt((Math.random()*1000000)%blocks.length)]
        // let block_map=new C_block()
        // block_map.rotate_grid(1,block_map.blue_print)
        for (var i = 0; i < 3; i += 1){
            let a=[]
            for (var j = 0; j < 3; j +=1) { 
                let temp = new block_element()
                // print((block_map.variations[1])[0][0])
                if ((block_map.variations[1])[i][j] == 1) {
                    temp.state=true
                }
                else {
                    temp.state=false
                }
                temp.coordinates = [
                    this.start_coordinates[0] + (i * environment.grid_size),
                    this.start_coordinates[1] + (j * environment.grid_size)
                    
                ]
                a.push(temp)
            }
            this.grid.push(a)
        }    
    }
    render_block() {
        for (i = 0; i < this.grid.length; i += 1){
            for (j = 0; j < this.grid[0].length; j += 1){
                // console.log("start: ",this.start_coordinates[0])
                let X = this.start_coordinates[0] + (i * environment.grid_size)
                let Y = this.start_coordinates[1] + (j * environment.grid_size)
                if (this.grid[j][i].state) {
                    fill(this.color)    
                    stroke('#000')
                    rect(X, Y, environment.grid_size, environment.grid_size);
                }
            }
            
        }
    }
}
function block_element() {
    this.state = false
    this.coordinates
}