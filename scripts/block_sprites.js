var rotateGrid = (grid) => {
    let a= grid
    var n=a.length;
    for (var i=0; i<n/2; i++) {
        for (var j=i; j<n-i-1; j++) {
            var tmp=a[i][j];
            a[i][j]=a[n-j-1][i];
            a[n-j-1][i]=a[n-i-1][n-j-1];
            a[n-i-1][n-j-1]=a[j][n-i-1];
            a[j][n-i-1]=tmp;
        }
    }
    return a;
}
// class block_transformations{
//     rotateGrid(a) {
//         var n=a.length;
//         for (var i=0; i<n/2; i++) {
//             for (var j=i; j<n-i-1; j++) {
//                 var tmp=a[i][j];
//                 a[i][j]=a[n-j-1][i];
//                 a[n-j-1][i]=a[n-i-1][n-j-1];
//                 a[n-i-1][n-j-1]=a[j][n-i-1];
//                 a[j][n-i-1]=tmp;
//             }
//         }
//         return a;
//     }
// }
class Z_block{
    constructor() {
        this.blue_print=[[1, 1, 0],
                         [0, 1, 0],
                         [0, 1, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    rotateGrid(a) {
        var n=a.length;
        for (var i=0; i<n/2; i++) {
            for (var j=i; j<n-i-1; j++) {
                var tmp=a[i][j];
                a[i][j]=a[n-j-1][i];
                a[n-j-1][i]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[j][n-i-1];
                a[j][n-i-1]=tmp;
            }
        }
        return a;
    }
    
    
}
class T_block{
    constructor() {
        this.blue_print=[[1, 1, 1],
                         [0, 1, 0],
                         [0, 1, 0],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
    
}
class C_block{
    constructor() {
        this.blue_print=[[ 1, 1],
                         [ 1, 0],
                         [ 1, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class I_block{
    constructor() {
        this.blue_print=[[1, 1, 1],
                         [0, 1, 0],
                         [1, 1, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class J_block{
    constructor() {
        this.blue_print=[[1, 1, 1],
                         [0, 1, 0],
                         [1, 1, 0],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class F_block{
    constructor() {
        this.blue_print=[[0, 1, 1],
                         [0, 1, 1],
                         [0, 1, 0],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class E_block{
    constructor() {
        this.blue_print=[[0, 1, 1],
                         [0, 1, 1],
                         [0, 1, 0],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class L_block{
    constructor() {
        this.blue_print=[[1, 0, 0],
                         [1, 0, 0],
                         [1, 1, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class M_block{
    constructor() {
        this.blue_print=[[1, 1, 1],
                         [1, 1, 1],
                         [1, 0, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class plus_block{
    constructor() {
        this.blue_print=[[0, 1, 0],
                         [1, 1, 1],
                         [0, 1, 0],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class fwd_block{
    constructor() {
        this.blue_print=[[1, 0, 0],
                         [0, 1, 0],
                         [0, 0, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class up_block{
    constructor() {
        this.blue_print=[[0, 0, 0],
                         [0, 1, 0],
                         [1, 0, 1],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}
class kite_block{
    constructor() {
        this.blue_print=[[0, 1, 1],
                         [0, 1, 1],
                         [1, 0, 0],]
        this.variations = {
            1: this.blue_print,
            // 2: rotateGrid(this.blue_print),
            // 3:rotateGrid(rotateGrid(this.blue_print)),
            // 4:rotateGrid(rotateGrid(rotateGrid(this.blue_print)))
            
        }
    }
    
}