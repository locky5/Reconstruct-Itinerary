var findItinerary = function(tickets) {
    let map = {}
    let result = []

    for (let i = 0; i < tickets.length; i++) {
        let departure = tickets[i][0]
        let destination = tickets[i][1]
        if (map[departure]) {
            map[departure].push(destination)
        } else {
            map[departure] = [destination]
        }
    }

    for (let departure in map) {
        map[departure].sort()
    }

    function dfs(node) {
        while (map[node] && map[node].length) {
            dfs(map[node].shift())
        }
        result.push(node)
    }
    dfs('JFK')

    return result.reverse()
};
