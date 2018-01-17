function alg_Laura(dimension) {

    //field = growingtree.create(dimension, dimension, 20);
    //field.dimension = dimension;
    console.log('HALLO');
    function iterate(field, x, y) { 
        field[x][y] = false;
        while(true) {
            directions = [];
            if(x > 1 && field[x-2][y] == true) {
                directions.push([-1, 0]);
            }
            if(x < field.dimension - 2 && field[x+2][y] == true) {
                directions.push([1, 0]);
            }
            if(y > 1 && field[x][y-2] == true) {
                directions.push([0, -1]);
            }
            if(y < field.dimension - 2 && field[x][y+2] == true) {
                directions.push([0, 1]);
            }
            if(directions.length == 0) {
                return field;
            }
            dir = directions[Math.floor(Math.random()*directions.length)];
            field[x+dir[0]][y+dir[1]] = false;
            field = iterate(field, x+dir[0]*2, y+dir[1]*2);
        }
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            console.log(j);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function carve_passage(grid, cx, cy) {

        var dx, dy, nx, ny;
        var directions = ['N', 'E', 'S', 'W'];

        //shuffle the direction array
        shuffleArray(directions);
        //iterates through the direction then test if the cell in that direction is valid and
        //within the bounds of the maze
        for (var w = 0; w < 4; w++) {
            if(directions[w] == 'N'){
                dx = 0;
                dy = -2;
            } else if(directions[w] == 'E') {
                dx = 2;
                dy = 0;
            } else if(directions[w] == 'S') {
                dx = 0;
                dy = 2;
            } else if(directions[w] == 'W') {
                dx = -2;
                dy = 0;
            }
            // check if the cell is valid
            nx = cx + dx;
            ny = cy + dy;
            console.log(nx);
            console.log(ny);
            // check if we are on valid grid
            if (((nx < dimension) && (nx >= 0)) && ((ny < dimension) && (ny >= 0))) {
                //check if grid is not visited
                if (grid[nx][ny] == true) {
                    //console.log(grid[nx][ny] | getOpposite(directions[key]));
                    if(directions[w] == 'N'){
                        grid[cx][cy-1] = false;
                    } else if(directions[w] == 'E') {
                        grid[cx+1][cy] = false;
                    } else if(directions[w] == 'S') {
                        grid[cx][cy+1] = false;
                    } else if(directions[w] == 'W') {
                        grid[cx-1][cy] = false;
                    }
                    grid[nx][ny] = false;
                    //grid[nx][ny] = (grid[nx][ny] | getOpposite(directions[key]));
                    carve_passage(grid, nx, ny);
                }
            }
        }
        //console.log(grid);
        return grid;
    }


    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for(var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }
    var grid = new Array(dimension);
    grid.dimension = dimension;
    for(var k = 0; k < dimension; k++) {
        grid[k] = new Array(dimension);
        for (var m = 0; m < dimension; m++) {
            grid[k][m] = 0;
        }
    }
    var directions = {N: 1, E: 4, S: 2, W: 8};
    field = carve_passage(field, 1, 1);
    console.log(field);
    field[dimension-2][dimension-2] = false;
    // Gnerate the maze recursively.
    /*for(var z = 0; z < dimension; z++) {
        for (var x = 0; x < dimension; x++) {
            if((grid[z][x] & directions[N]) != 0){
                field[z][x] = false;
            }
            if((grid[z][x] & directions[W]) != 0 && ((grid[z][x] | grid[z+1][x])& directions[N]) != 0){
                field[z][x] = false;
            }
        }
    }*/
    //field = iterate(field, 1, 1);

    return field;

}

//Astray standard
function generateSquareMaze(dimension) {

    function iterate(field, x, y) {
        field[x][y] = false;
        while(true) {
            directions = [];
            if(x > 1 && field[x-2][y] == true) {
                directions.push([-1, 0]);
            }
            if(x < field.dimension - 2 && field[x+2][y] == true) {
                directions.push([1, 0]);
            }
            if(y > 1 && field[x][y-2] == true) {
                directions.push([0, -1]);
            }
            if(y < field.dimension - 2 && field[x][y+2] == true) {
                directions.push([0, 1]);
            }
            if(directions.length == 0) {
                return field;
            }
            dir = directions[Math.floor(Math.random()*directions.length)];
            field[x+dir[0]][y+dir[1]] = false;
            field = iterate(field, x+dir[0]*2, y+dir[1]*2);
        }
    }

    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for(var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    // Gnerate the maze recursively.
    field = iterate(field, 1, 1);

    return field;


}

//does not really work
function generateGrowingTreeMaze(dimension) {

    field = growingtree.create(dimension, dimension, 20);
    field.dimension = dimension;

    return field;

}