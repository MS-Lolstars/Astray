function getMaze() {
    return IN_SURVEY_MODE ? getHardcodedMaze(mazeDimension) : generateSquareMaze(mazeDimension);
}

function getExpGrid(mazeID){

    switch(mazeID) {
        case 1:
            var mazev1 = [];
            mazev1[0] = [true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true];
            mazev1[1] = [true,	false,	true,	false,	false,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true];
            mazev1[2] = [true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true,	false,	true,	false,	true];
            mazev1[3] = [true,	false,	true,	false,	false,	false,	true,	false,	true,	false,	true,	false,	true,	false,	true,	false,	true];
            mazev1[4] = [true,	false,	true,	true,	true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true];
            mazev1[5] = [true,	false,	false	,false,	false,	false,	true	,false,	false,	false,	true,	false,	false,	false,	true,	false,	true];
            mazev1[6] = [true,	true	,true,	true,	true,	true,	true,	true,	true,	false,	true,	true,	true,	true,	true,	false,	true];
            mazev1[7] = [true,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	true];
            mazev1[8] = [true,	false,	true,	false,	true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true];
            mazev1[9] = [true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true];
            mazev1[10] = [true,	false,	true,	true,	true,	true,	true,	true,	true,	false,	true,	true,	true,	true,	true,	false,	true];
            mazev1[11] = [true,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true,	false,	false,	false,	true,	false,	true];
            mazev1[12] = [true,	true,	true,	true	,true,	true,	true,	true,	true,	true,	true,	false,	true,	true,	true,	false,	true];
            mazev1[13] = [true,	false,	true,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev1[14] = [true,	false,	true,	false,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true];
            mazev1[15] = [true	,false	,false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev1[16] = [true,	false,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true	,true,	true];
            mazev1.dimension = 17;

            return mazev1;
            break;
        case 2:
            var mazev2 = [];
            mazev2[0] = [true,  true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   false,  true];
            mazev2[1] = [true,   false,  false,  false,  true,   false,  false,  false,  false,  false,  false,  false,  false,  false,  true,   false,  true];
            mazev2[2] = [true,   true,   true,   false,  true,   false,  true,   true,   true,   false,  true,   true,   true,   false  ,true,   false,  true];
            mazev2[3] = [true,   false,  true    ,false, true,   false,  true,   false,  false,  false,  true,   false,  false,  false,  false,  false,  true];
            mazev2[4] = [true,   false,  true,   false,  true,   false,  true,   false,  true,   true,   true,   true,   true,   true,   true,   false,  true];
            mazev2[5] = [true,   false,  false,  false,  true,   false,  true,   false,  false,  false,  false,  false,  true,   false,  false,  false,  true];
            mazev2[6] = [true,   false,  true,   true,   true,   true,   true,   true,   true,   true,   true,   false,  true,   true,   true,   true,   true];
            mazev2[7] = [true,   false,  false,  false,  false,  false,  false,  false,  false,  false,  true,   false,  false,  false,  false,  false,  true];
            mazev2[8] = [true,   true,   true,   true,   true,   true,   true,   true,   true,   false,  true,   false,  true,   true,   true,   false,  true];
            mazev2[9] = [true,   false,  false,  false,  false,  false,  true,   false,  true,   false,  true,   false,  false,  false,  true,   false,  true];
            mazev2[10] = [true,   true,   true,   false,  true,   false,  true,   false,  true,   false,  true,   true,   true,   true,   true,   false,  true];
            mazev2[11] = [true,   false,  false,  false,  true,   false,  false,  false,  true,   false,  false,  false,  false,  false,  false,  false,  true];
            mazev2[12] = [true,   false,  true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   false,  true];
            mazev2[13] = [true,   false,  true,   false,  false,  false,  false,  false,  false,  false,  false,  false,  false,  false,  true,   false,  true];
            mazev2[14] = [true,   false,  true,   false,  true,   true,   true,   true,   true,   true,   true,   true,   true,   false,  true,   false,  true];
            mazev2[15] = [true,   false,  false,  false,  false,  false,  false,  false,  false,  false,  false,  false,  true,   false,  false,  false,  true];
            mazev2[16] = [true,    true,   true,    true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true,   true];
            mazev2.dimension = 17;
            return mazev2;
            break;
        case 3:
            var mazev3 =  [];
            mazev3[0] =  [true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true];
            mazev3[1] =  [true,	false,	false,	false,	true,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev3[2] =  [true,	true,	true,	false,	true,	false,	true,	true,	true,	true,	true,	true,	true,	true,	true,	false,	true];
            mazev3[3] =  [true,	false,	true,	false,	true,	false,	false,	false,	false,	false,	true,	false,	false,	false,	false,	false,	true];
            mazev3[4] =  [true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true,	true,	true,	true,	true,	true,	true];
            mazev3[5] =  [true,	false,	true,	false,	false,	false,	true,	false,	true,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev3[6] =  [true,	false,	true,	true,	true,	false,	true,	true,	true,	true,	true,	true,	true,	true,	true,	false,	true];
            mazev3[7] =  [true,	false,	false,	false,	true,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev3[8] =  [true,	false,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	false,	true];
            mazev3[9] =  [true,	false,	false,	false,	false,	false,	true,	false,	false,	false,	false,	false,	false,	false,	true,	false,	true];
            mazev3[10] = [true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true,	true,	true,	false,	true];
            mazev3[11] = [true,	false,	true,	false,	false,	false,	true,	false,	true,	false,	true,	false,	true,	false,	false,	false,	true];
            mazev3[12] = [true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true,	false,	true,	false,	true,	true,	true];
            mazev3[13] = [true,	false,	true,	false,	true,	false,	false,	false,	true,	false,	true,	false,	true,	false,	true,	false,	true];
            mazev3[14] = [true,	false,	true,	false,	true,	true,	true,	true,	true,	false,	true,	true,	true,	false,	true,	false,	true];
            mazev3[15] = [true,	false,	false,	false,	false,	false,	false,	false,	true,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev3[16] = [true,	false,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true];
            mazev3.dimension = 17;
            return mazev3;
            break;
        case 4:
            var mazev4 =  [];
            mazev4[0] =  [true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	false,	true];
            mazev4[1] =  [true,	false,	true,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true];
            mazev4[2] =  [true,	false,	true,	true,	true,	true,	true,	false,	true,	false,	true,	true,	true,	true,	true,	false,	true];
            mazev4[3] =  [true,	false,	false,	false,	false,	false,	true,	false,	true,	false,	true,	false,	false,	false,	true,	false,	true];
            mazev4[4] =  [true,	true,	true,	true,	true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true,	false,	true];
            mazev4[5] =  [true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	true,	false,	true,	false,	false,	false,	true];
            mazev4[6] =  [true,	true,	true,	false,	true,	true,	true,	false,	true,	false,	true,	true,	true,	true,	true,	true,	true];
            mazev4[7] =  [true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true];
            mazev4[8] =  [true,	false,	true,	true,	true,	false,	true,	true,	true,	true,	true,	false,	true,	false,	true,	false,	true];
            mazev4[9] =  [true,	false,	false,	false,	false,	false,	true,	false,	false,	false,	true,	false,	false,	false,	true,	false,	true];
            mazev4[10] = [true,	false,	true,	true,	true,	true,	true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true];
            mazev4[11] = [true,	false,	true,	false,	false,	false,	false,	false,	true,	false,	false,	false,	true,	false,	true,	false,	true];
            mazev4[12] = [true,	false,	true,	false,	true,	true,	true,	true,	true,	true,	true,	false,	true,	true,	true,	false,	true];
            mazev4[13] = [true,	false,	false,	false,	true,	false,	false,	false,	false,	false,	true,	false,	true,	false,	false,	false,	true];
            mazev4[14] = [true,	true,	true,	true,	true,	false,	true,	false,	true,	true,	true,	false,	true,	false,	true,	false,	true];
            mazev4[15] = [true,	false,	false,	false,	false,	false,	true,	false,	false,	false,	false,	false,	false,	false,	true,	false,	true];
            mazev4[16] = [true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true,	true];
            mazev4.dimension = 17;
            return mazev4;
            break;
        default:
            //error
    }
}

function generateSquareMaze(dimension) {
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // recursive backtracking to generate maze
    function recursive_backtracking(grid, cx, cy) {

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
                    recursive_backtracking(grid, nx, ny);
                }
            }
        }
        //console.log(grid);
        return grid;
    }

    // transform maze into a specific grid matrix for mace coefficient computation
    function deadend_algorithm(grid){
        var grid_org = grid;
        var deadends = [];
        for(var i = 1; i < (dimension-1); i++) {
            for (var j = 1; j < (dimension-1); j++) {
                var nu = grid_org[i][j+1];
                var nd = grid_org[i][j-1];
                var nl = grid_org[i+1][j];
                var nr = grid_org[i-1][j];
                if(nu+nd+nl+nr == -3 && grid[i][j] == 0 && !(i==1 && j==1)){
                    deadends.push([i,j]);
                    grid[i][j] = -2;
                }
            }
        }
        //console.log(deadends);
        deadends.forEach(function(x){
            var dx = x[0];
            var dy = x[1];

            var npos = get_next_position(grid, dx, dy);
            var nx = npos[0];
            var ny = npos[1];
            var fork = is_fork(grid, nx, ny);
            while(fork != 0){
                grid[nx][ny] = fork;
                if(nx == 0 || ny == 0 || nx == dimension-1 || ny == dimension-1){
                    break;
                }
                var nnpos = get_next_position(grid, nx, ny);
                nx = nnpos[0];
                ny = nnpos[1];
                fork = is_fork(grid, nx, ny);
            }
        });

        return grid;
    }

    function get_next_position(grid, cx, cy){
        var nu = grid[cx][cy+1];
        var nd = grid[cx][cy-1];
        var nl = grid[cx+1][cy];
        var nr = grid[cx-1][cy];
        if(nu == 0){
            return([cx, cy+1])
        } else if(nd == 0) {
            return([cx, cy-1])
        } else if(nl == 0) {
            return([cx+1, cy])
        } else if(nr == 0) {
            return([cx-1, cy])
        }
    }

    function is_fork(grid, cx, cy){
        if(cx == dimension-1 || cy == dimension-1 || cx == 0 || cy == 0){
            return 0;
        }
        var nu = grid[cx][cy+1];
        var nd = grid[cx][cy-1];
        var nr = grid[cx+1][cy];
        var nl = grid[cx-1][cy];
        //console.log('nu: '+nu+', nd: '+nd+', nr: '+nr+', nl: '+nl);
        var paths = 0;
        if(nu == 0){
            paths++;
        }
        if(nd == 0){
            paths++;
        }
        if(nl == 0){
            paths++;
        }
        if(nr == 0){
            paths++;
        }
        var max = Math.max(nu,nd,nr,nl);
        if((nu > 0 && nd > 0) || (nu > 0 && nl > 0) || (nu > 0 && nr > 0) || (nd > 0 && nr > 0) ||
            (nd > 0 && nl > 0) || (nr > 0 && nl > 0)) {
            //console.log('deadendsfork');
            return(max+1);
        }
        if(paths>1){
            //console.log('fork');
            return 0;
        } else if(cx == 1 && cy == 1) {
            //console.log('start');
            return 0;
        } else if(max == 0) {
            return 1;
        } else {
            return(max);
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
    field[1][1] = false;
    // generate maze
    field = recursive_backtracking(field, 1, 1);

    // initialize one grid for each possible exit
    var grid1 = new Array(dimension);
    var grid2 = new Array(dimension);
    var grid3 = new Array(dimension);
    grid1.dimension = dimension;
    grid2.dimension = dimension;
    grid3.dimension = dimension;
    for(var k = 0; k < dimension; k++) {
        grid1[k] = new Array(dimension);
        grid2[k] = new Array(dimension);
        grid3[k] = new Array(dimension);
        for (var m = 0; m < dimension; m++) {
            if(field[k][m] == true) {
                grid1[k][m] = -1;
                grid2[k][m] = -1;
                grid3[k][m] = -1;
            } else {
                grid1[k][m] = 0;
                grid2[k][m] = 0;
                grid3[k][m] = 0;
            }
        }
    }
    //Generate first
    var exit;
    grid1[dimension-1][dimension-2] = 0;
    var exit1 = [dimension-1, dimension-2];
    grid1 = deadend_algorithm(grid1);
    //console.log('grid1: '+grid1);
    //Generate second
    grid2[dimension-1][1] = 0;
    var exit2 = [dimension-1, 1];
    grid2 = deadend_algorithm(grid2);
    //Generate third
    grid3[0][dimension-2] = 0;
    var exit3 = [dimension-2, 0];
    grid3 = deadend_algorithm(grid3);

    //console.log('grid2: '+grid2);
    //console.log('grid3: '+grid3);

    // compute for each of these grids mace coefficient
    var mc1 = computeMazeCoefficient(grid1, dimension, exit1);
    var mc2 = computeMazeCoefficient(grid2, dimension, exit2);
    var mc3 = computeMazeCoefficient(grid3, dimension, exit3);
   // console.log('mc1: '+mc1);
   // console.log('mc2: '+mc2);
   // console.log('mc3: '+mc3);

    // set exit according to largest mace coefficient
    if (mc1>mc2)
        if (mc1>mc3) {
            exit = exit1;
            field[dimension-1][dimension-2] = false;
        } else {
            exit = exit3;
            field[0][dimension-2] = false;
        }
    else
        if(mc2>mc3) {
            exit = exit2;
            field[dimension-1][1] = false;
        } else {
            exit = exit3;
            field[0][dimension-2] = false;
        }
    //field[dimension-1][dimension-2] = false;
    return field;

}

function computeMazeCoefficient(maze, dimension, exit) {
    if (maze != undefined && maze != null && dimension != undefined && dimension != null && exit != undefined && exit != null) {
        var quantDeadEnds = 0;
        var deadEndDepth = 0;
        var lengthDeadends = 0;
        var lengthShortestWay = 0;
        var crossRoadsShortestWay = 0;
        var badSquares = 0;

        for (var i = 1; i < dimension-1; i++) {
            for (var j = 1; j < dimension-1; j++) {

                // increment quantity of deadends and length of all deadends
                if (maze[i][j] == -2) {
                    quantDeadEnds = quantDeadEnds + 1;
                    lengthDeadends = lengthDeadends + 1;

                // increment length of the shortest way out and the number of crossroads on the shortest way out.
                } else if (maze[i][j] == 0) {
                    lengthShortestWay = lengthShortestWay + 1; 

                    if (maze[i-1][j] != -1 && maze[i+1][j] != -1 && maze[i][j-1] != -1 
                        || maze[i+1][j] != -1 && maze[i][j-1] != -1 && maze[i][j+1] != -1
                        || maze[i][j-1] != -1 && maze[i][j+1] != -1 && maze[i-1][j] != -1
                        || maze[i][j+1] != -1 && maze[i-1][j] != -1 && maze[i+1][j] != -1) {

                            crossRoadsShortestWay = crossRoadsShortestWay + 1;
                            if (i - exit[1] >= -3 && i - exit[1] <= 3)
                                if (j - exit[2] >= -3 && j - exit[2] <= 3)
                                    badSquares = badSquares + 1;
                        }

            
                // increment length of all deadends(here points which are not the deadendpoint but rather the way are considered) and get the max level of depth
                } else if (maze[i][j] > 0) {
                    lengthDeadends = lengthDeadends + 1;
                    if (maze[i][j] > deadEndDepth)
                        deadEndDepth = maze[i][j];
                }

            }
        }

        mazeCoeff = (5*lengthShortestWay + lengthDeadends * quantDeadEnds/deadEndDepth) * (1 + crossRoadsShortestWay - badSquares);
        //console.log('lengthShortestWay: '+lengthShortestWay);
        //console.log('lengthDeadends: '+lengthDeadends);
        //console.log('quantDeadEnds: '+quantDeadEnds);
        //console.log('deadEndDepth: '+deadEndDepth);
        //console.log('crossRoadsShortestWay: '+crossRoadsShortestWay);
        //console.log('badSquares: '+badSquares);
        return (mazeCoeff);
    } else {
        //console.log("In method computeMazeCoeffiecent either the paramater maze and/or dimension is null/undefined!")
    }
}



function getHardcodedMaze(dimension) {
    var mazelv1 = [];
    mazelv1[0] = [true, false, true, true, true, true, true, true, true, true, true, false, true];
    mazelv1[1] = [false, false, true, false, false, false, false, false, false, false, false, false, true];
    mazelv1[2] = [true, false, true, true, true, true, true, true, true, false, true, true, true];
    mazelv1[3] = [true, false, true, false, false, false, false, false, true, false, false, false, true];
    mazelv1[4] =  [true, false, true, false, true, true, true, false, true, false, true, false, true];
    mazelv1[5] =  [true, false, true, false, false, false, true, false, true, false, true, false, true];
    mazelv1[6] = [true, false, true, true, true, false, true, false, true, true, true, false, true];
    mazelv1[7] = [true, false, true, false, false, false, true, false, false, false, false, false, true];
    mazelv1[8] = [true, false, true, false, true, true, true, true, true, true, true, false, true];
    mazelv1[9] = [true, false, false, false, true, false, false, false, false, false, true, false, true];
    mazelv1[10] = [true, true, true, true, true, false, true, true, true, false, true, false, true];
    mazelv1[11] = [true, false, false, false, false, false, false, false, true, false, false, false, true];
    mazelv1[12] = [true, true, true, true, true, true, true, true, true, true, true, true, true];
    mazelv1.dimension = 13;

    var mazelv2 = [];
    mazelv2[0] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    mazelv2[1] = [true, false, false, false, false, false, false, false, false, false, true, false, false, false, true];
    mazelv2[2] = [true, true, true, true, true, true, true, true, true, false, true, false, true, false, true];
    mazelv2[3] = [true, false, false, false, false, false, false, false, true, false, true, false, true, false, true];
    mazelv2[4] = [true, false, true, true, true, true, true, true, true, false, true, true, true, false, true];
    mazelv2[5] = [true, false, false, false, false, false, true, false, false, false, true, false, false, false, true];
    mazelv2[6] = [true, false, true, true, true, false, true, false, true, true, true, false, true, false, true];
    mazelv2[7] = [true, false, true, false, false, false, true, false, true, false, false, false, true, false, true];
    mazelv2[8] = [true, false, true, false, true, true, true, false, true, false, true, true, true, false, true];
    mazelv2[9] = [true, false, true, false, true, false, false, false, true, false, true, false, false, false, true];
    mazelv2[10] = [true, false, true, false, true, false, true, true, true, false, true, false, true, true, true];
    mazelv2[11] = [true, false, true, false, true, false, false, false, true, false, true, false, true, false, true];
    mazelv2[12] = [true, false, true, false, true, true, true, false, true, false, true, false, true, false, true];
    mazelv2[13] = [true, false, true, false, false, false, false, false, false, false, true, false, false, false, true];
    mazelv2[14] = [true, false, true, true, true, true, true, true, true, true, true, true, true, true, true];
    mazelv2.dimension = 15;

    var mazelv3 = [];
    mazelv3[0] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true];
    mazelv3[1] = [true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true];
    mazelv3[2] = [true, false, true, false, true, false, true, false, true, true, true, false, true, false, true, true, true];
    mazelv3[3] = [true, false, true, false, true, false, true, false, false, false, true, false, true, false, false, false, true];
    mazelv3[4] = [true, false, true, true, true, false, true, true, true, false, true, true, true, true, true, false, true];
    mazelv3[5] = [true, false, true, false, false, false, true, false, true, false, false, false, true, false, false, false, true];
    mazelv3[6] = [true, false, true, false, true, true, true, false, true, true, true, false, true, false, true, true, true];
    mazelv3[7] = [true, false, false, false, true, false, true, false, false, false, false, false, true, false, false, false, true];
    mazelv3[8] = [true, true, true, true, true, false, true, false, true, true, true, true, true, false, true, false, true];
    mazelv3[9] = [true, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false, true];
    mazelv3[10] = [true, false, true, true, true, false, true, false, true, true, true, true, true, true, true, false, true];
    mazelv3[11] = [true, false, true, false, false, false, true, false, false, false, true, false, false, false, false, false, true];
    mazelv3[12] = [true, false, true, true, true, true, true, true, true, false, true, false, true, true, true, false, true];
    mazelv3[13] = [true, false, false, false, true, false, false, false, false, false, true, false, true, false, true, false, true];
    mazelv3[14] = [true, false, true, false, true, false, true, true, true, true, true, false, true, false, true, false, true];
    mazelv3[15] = [true, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, true];
    mazelv3[16] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    mazelv3.dimension = 17;

    var mazelv4 = [];
    mazelv4[0] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true];
    mazelv4[1] = [true, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true];
    mazelv4[2] = [true, false, true, false, true, false, true, true, true, true, true, false, true, true, true, false, true, true, true, false, true];
    mazelv4[3] = [true, false, true, false, true, false, false, false, false, false, true, false, true, false, true, false, false, false, true, false, true];
    mazelv4[4] = [true, false, true, true, true, true, true, false, true, false, true, false, true, false, true, true, true, false, true, true, true];
    mazelv4[5] = [true, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, false, true];
    mazelv4[6] = [true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true];
    mazelv4[7] = [true, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, true, false, true];
    mazelv4[8] = [true, false, true, true, true, true, true, true, true, false, true, false, true, true, true, false, true, true, true, false, true];
    mazelv4[9] = [true, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, true, false, true];
    mazelv4[10] = [true, false, true, true, true, true, true, true, true, true, true, false, true, false, true, true, true, false, true, false, true];
    mazelv4[11] = [true, false, false, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, true];
    mazelv4[12] = [true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true];
    mazelv4[13] = [true, false, true, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false, false, false, true];
    mazelv4[14] = [true, false, true, true, true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, true, true];
    mazelv4[15] = [true, false, false, false, true, false, true, false, false, false, true, false, true, false, true, false, false, false, true, false, true];
    mazelv4[16] = [true, true, true, false, true, false, true, false, true, false, true, true, true, false, true, false, true, true, true, false, true];
    mazelv4[17] = [true, false, false, false, true, false, true, false, true, false, false, false, true, false, true, false, true, false, false, false, true];
    mazelv4[18] = [true, false, true, true, true, false, true, false, true, true, true, false, true, false, true, false, true, false, true, false, true];
    mazelv4[19] = [true, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false, true];
    mazelv4[20] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    mazelv4.dimension = 21;

    var mazelv5 = [];
    mazelv5[0] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    mazelv5[1] = [true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, true];
    mazelv5[2] = [true, false, true, false, true, false, true, true, true, false, true, true, true, false, true, false, true, false, true, true, true, false, true, false, true, true, true];
    mazelv5[3] = [true, false, true, false, true, false, false, false, true, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, false, false, true];
    mazelv5[4] = [true, false, true, true, true, true, true, false, true, false, true, false, true, false, true, true, true, true, true, false, true, true, true, true, true, false, true];
    mazelv5[5] = [true, false, false, false, false, false, true, false, true, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, true, false, true];
    mazelv5[6] = [true, true, true, true, true, false, true, false, true, true, true, false, true, false, true, false, true, true, true, true, true, true, true, false, true, false, true];
    mazelv5[7] = [true, false, true, false, false, false, true, false, false, false, true, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, true];
    mazelv5[8] = [true, false, true, false, true, true, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, true, true, true, true, false, true];
    mazelv5[9] = [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, false, true, false, true];
    mazelv5[10] = [true, false, true, true, true, false, true, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, false, true, false, true];
    mazelv5[11] = [true, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, true, false, true, false, true];
    mazelv5[12] = [true, true, true, false, true, false, true, true, true, true, true, false, true, true, true, true, true, true, true, false, true, false, true, false, true, false, true];
    mazelv5[13] = [true, false, false, false, true, false, true, false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, true, false, false, false, true];
    mazelv5[14] = [true, false, true, true, true, false, true, false, true, false, true, false, true, false, true, true, true, true, true, true, true, false, true, true, true, false, true];
    mazelv5[15] = [true, false, true, false, false, false, true, false, true, false, false, false, true, false, true, false, false, false, false, false, true, false, false, false, true, false, true];
    mazelv5[16] = [true, false, true, true, true, true, true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, true, true, false, true, false, true];
    mazelv5[17] = [true, false, true, false, false, false, false, false, true, false, false, false, true, false, false, false, true, false, true, false, true, false, false, false, true, false, true];
    mazelv5[18] = [true, false, true, false, true, true, true, true, true, false, true, false, true, false, true, true, true, false, true, false, true, true, true, true, true, false, true];
    mazelv5[19] = [true, false, true, false, false, false, false, false, true, false, true, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, true];
    mazelv5[20] = [true, false, true, true, true, true, true, false, true, false, true, false, true, false, true, true, true, false, true, true, true, true, true, true, true, true, true];
    mazelv5[21] = [true, false, true, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, true];
    mazelv5[22] = [true, false, true, false, true, true, true, true, true, false, true, true, true, true, true, false, true, true, true, true, true, true, true, false, true, false, true];
    mazelv5[23] = [true, false, true, false, false, false, true, false, true, false, true, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, true];
    mazelv5[24] = [true, false, true, true, true, false, true, false, true, false, true, true, true, true, true, true, true, false, true, false, true, true, true, true, true, false, true];
    mazelv5[25] = [true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true];
    mazelv5[26] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true];
    mazelv5.dimension = 27;

    if(dimension == 13) {
        //console.log(generateSquareMaze(dimension));
        //console.log(mazelv1);
    }
    switch(dimension) {
        case 13: return mazelv1; break;
        case 15: return mazelv2; break;
        case 17: return mazelv3; break;
        case 21: return mazelv4; break;
        case 27: return mazelv5; break;
        default: return generateSquareMaze(dimension); break;
    }
}