function animate(steps) {
    var counter = 0

    function afterAnimation() {
        console.log("Animation has finished! total cycles:" + counter)
    }

    var intervalID = setInterval(function () {
        counter++

        if (counter === steps) {
            clearInterval(intervalID)
            afterAnimation()
        }
    }, 10)
}

animate(100)
animate(200)