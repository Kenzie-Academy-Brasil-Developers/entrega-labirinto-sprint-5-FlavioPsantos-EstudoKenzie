const principalElement = document.getElementById("conteudoPrincipal")
const quarter = document.getElementById("tabuleiro")
const victory = document.getElementById("tela_vitoria")
principalElement.appendChild(quarter)
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 3],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

function showView(view) {
    view.style.display = 'block'
}

function hidden(view) {
    view.style.display = 'none'
}

function renderMaze(value) {
    quarter.innerHTML = "";
    for (let i = 0; i < value.length; i++) {
        let lineMaze = document.createElement('div');
        lineMaze.classList = 'lineMaze'
        for (let j = 0; j < value[i].length; j++) {
            let columnMaze = document.createElement('div');
            if (value[i][j] === 1) {
                columnMaze.className = 'wall'
            } else if (value[i][j] === 2) {
                let figure = document.createElement('div')
                columnMaze.className = 'floor'
                figure.className = "personagem"
                columnMaze.appendChild(figure)

            } else {
                columnMaze.className = 'floor'
            }
            lineMaze.appendChild(columnMaze)
            quarter.appendChild(lineMaze)
        }
    }
}

renderMaze(maze)

function findFigure(maze) {
    let position = []
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                position = [i, j]

            }
        }
    }
    moveFigure(position, maze)
}
findFigure(maze)

function clearPosition(position) {
    if (maze[position[0]][position[1]] !== 1) {
        maze[position[0]][position[1]] = 0
    }
}

function verifyPosition(position, value) {
    if (value[position[0]][position[1]] !== 1) {
        return true;
    } else {

    }

}

function runInMaze(value, position) {
    if (value[position[0]][position[1]] === 0) {
        value[position[0]][position[1]] = 2
        renderMaze(value)
    } else if (value[position[0]][position[1]] === 3) {
        showView(victory)
    }
}

function moveFigure(position) {
    document.addEventListener('keydown', (e) => {
        clearPosition(position)
        let direction = e.key
        if (direction === 'ArrowDown') {
            if (maze[position[0]][position[1] + 1] !== 1) {
                position[1] += 1
            }
        } else if (direction === 'ArrowUp') {
            if (maze[position[0]][position[1] - 1] !== 1) {
                position[1] -= 1
            }
        } else if (direction === 'ArrowLeft') {
            if (maze[position[0] - 1][position[1]] !== 1) {
                position[0] -= 1
            }

        } else if (direction === 'ArrowRight') {
            if (maze[position[0] + 1][position[1]] !== 1) {
                position[0] += 1
            }

        }

        runInMaze(maze, position)


    });
}