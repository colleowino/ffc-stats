window.onload = function() {
	// open this list
	function openList(elem, open){
		let titles = document.querySelectorAll(elem);
		for(let i = 0; i < titles.length; i++){
			const current = titles[i];
			// always 1 class until 'open' included
			if(open){
				if(current.classList.length == 1){
					current.children[0].click();
				}
			} else {
				if(current.classList.length > 1){
					current.children[0].click();
				}
			}
		}

	}

	let totalTasks = 0;
	let totalDone = 0;

	function countCompleted(elem,label){
		let titles = document.querySelectorAll(elem);
		for(let i = 0; i < titles.length; i++){
			const current = titles[i];
			const done = current.querySelectorAll('.map-challenge-title-completed').length;
			const h5 = current.querySelectorAll('h5').length;
			const all = current.querySelectorAll('.map-challenge-title').length-h5; //ignore titles
			if (elem == '.superblock' && i != titles.length - 1){
				totalTasks += all;
				totalDone += done;
			}
			const ratio = done/all*100;
			current.querySelector(label).innerHTML += ` [ ${done} / ${all} ] # ${ratio.toFixed()} %`

		}
	}

	setTimeout(function(){ // only after user account is loaded can we count the completed

		openList('.superblock', true)
		openList('.block', true )

		countCompleted('.superblock','h4')
		countCompleted('.block','h5')

		const h2 = document.querySelector('h2');
		const ratio = totalDone/totalTasks*100;
		h2.innerHTML += ` [ ${totalDone} / ${totalTasks} ] # ${ratio.toFixed()} %`

		openList('.block', false)
		// openList('.superblock', false)

	},2000);
}
