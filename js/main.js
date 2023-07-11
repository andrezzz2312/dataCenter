// Variables
let videoloop,
	video1,
	video2,
	video3,
	subVideo1,
	subVideo2,
	subVideo3,
	buttonContainerMade,
	buttonGrid,
	threesixty,
	delay,
	subVideoTurn,
	subVideoBackLoop,
	buttonDimensions,
	firstPage,
	rotationPage,
	textContent,
	label,
	labelCont,
	paragraph,
	greenLine,
	titleH2,
	createdSubTitle,
	span,
	line,
	svg1,
	circle,
	backButton,
	backButtonRotation,
	brandIcon,
	backButtonContainer,
	backButtonContainerRotation,
	buttonGridContainer,
	buttonFontvar,
	globalFontvar,
	containVideoWidth,
	containVideoHeight,
	pCont,
	list,
	globalParent,
	pageIndex

let boxVideo = []
let buttonShort = []
let dataId = []
let video1check = false
let video2check = false
let video3check = false

let x = window.matchMedia('(max-height: 550px)')
const loop = document.querySelector('#loopVideo')
const loopContainer = document.querySelector('#loop')
const video1Container = document.querySelector('#video1')
const video2Container = document.querySelector('#video2')
const video3Container = document.querySelector('#video3')
const subVideo1Container = document.querySelector('#subVideo1')
const subVideo2Container = document.querySelector('#subVideo2')
const subVideo3Container = document.querySelector('#subVideo3')
const subVideoTurnContainer = document.querySelector('#subVideoTurn')
const subVideoBackLoopContainer = document.querySelector('#subVideoBackLoop')
const rotation = document.querySelector('#rotation')
const videoHolder = document.querySelector('#videoHolder')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainMenuB')
const titulo = document.querySelectorAll('.titulo')

// let details = navigator.userAgent
// let regexp = /android|iphone|kindle|ipad/i
// let ios = /iphone|ipad/i
// let macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i
// let isMobileDevice = regexp.test(details)
// let isIOS = ios.test(details)
// let isMac = macosPlatforms.test(details)
let isMobile = false
window.mobileCheck = function () {
	let mobile = (function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			isMobile = true
	})(navigator.userAgent || window.opera)
	console.log(isMobile)
}
mobileCheck()

// var buttonsText = []

mainMenuB.forEach((e, i) => {
	dataId[i] = e.dataset.id
	console.log(dataId[i])
	// const splitText = e.textContent.trim().split('\n')
	// const splitText = e.textContent
	// 	.replace(/[\n\r]+|[\s]{2,}/g, ' ')
	// 	.trim()
	// 	.split(' ')
	// splitText[1]
	// 	? (buttonsText[i] =
	// 			splitText[0].toLowerCase() + splitText[1].substring(0, 2))
	// 	: (buttonsText[i] = splitText[0].toLowerCase())
	// console.log(buttonsText[i])
})

const buttonContent = {
	turnlock10: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>FULL HEIGHT</span>  <span>TURNSTILE</span></span>`,
		subTitle: `Turnlock 100`,
		content: [
			`Deter unauthorized entry`,
			`Prevent unauthorized entry with optional\n BE Secure Optional Overhead Sensor System`,
			`2-way traffic, one direction at a time`,
			`High capacity - 200 people in 10 minutes (in one direction)`,
			`Integrates with any ACS or multi-factor schema`,
		],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\nPrevention`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [`standardO`, `piggybackingP`, `emergencyE`, `finishO`],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,

				content: [
					`Credential or biometric`,
					`Valid credential turns LED green`,
					`Turnstile rotates 120\u00B0, relocks, and sends a door closure signal,\nlogging the user into the space  `,
					`An authorized user can exit after the authorized user has entered`,
					`Exiting can also be set up as free out, requiring no credentials`,
					`Turnstile does not allow tailgating as it only rotates 120\u00B0 then relocks`,
				],
				delay: [1, 5, 10, 16],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'piggybackingP'>Piggybacking Prevention</span>`,
				content: [
					`Piggybacking is an attempt to enter in same compartment`,
					`Credential or biometric is presented`,
					`Valid credential turns LED green, unlocks turnstile and provides audible tone/voice`,
					`Door rotates about 30\u00B0, then stops as...`,
					`BE Secure Overhead Sensor System detects two people`,
					`Turnstile remains locked, forcing both people\nto exit the compartment backwards`,
					`With optional BE Secure Overhead Sensor System, there is never a breach.\nUnauthorized user always exits to the unsecured side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
				delay: [0, 5, 9, 14, 17, 19],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile unlocks outbound\nallowing egress only`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [
					`Turnstile available in galvanized steel, powder-coated steel or stainless steel`,
					3,
					`Tandem space-saving models available`,
					`Metal screens can be installed in addition to horizontal bars`,
				],
			},
		},
		// src: buttonsText[1],
	},
	tourlock18: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>SECURITY</span> <span>REVOLVING DOOR</span></span>`,
		subTitle: `Tourlock 180`,
		content: [
			`Prevent unauthorized entry`,
			`In and out simultaneous 2-way traffic`,
			`High Throughput - 10 min. Peak of 150 people, each way`,
			`Integrates with any ACS or multi-factor schema`,
			`Risk Score - 2.7%, Efficiency Score - 97.3%`,
		],
		inputButtonGrid: [
			`Standard \nOperation`,
			`Piggybacking \n Prevention`,
			`Tailgating \nPrevention 1`,
			`Tailgating \nPrevention 2`,
			`Emergency \nEgress`,
			`Glass \nOptions`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,

				content: [
					`Credential or biometric`,
					`Valid credential turns LED green`,
					`Turnstile rotates 120\u00B0, relocks, and sends a door closure signal,\nlogging the user into the space  `,
					`An authorized user can exit after the authorized user has entered`,
					`Exiting can also be set up as free out, requiring no credentials`,
					`Turnstile does not allow tailgating as it only rotates 120\u00B0 then relocks`,
				],
				delay: [1, 5, 10, 16],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention</span>`,
				content: [
					`Piggybacking is an attempt to enter in same compartment`,
					`Credential or biometric is presented`,
					`Valid credential turns LED green, unlocks turnstile and provides audible tone/voice`,
					`Door rotates about 30\u00B0, then stops as...`,
					`BE Secure Overhead Sensor System detects two people`,
					`Turnstile remains locked, forcing both people\nto exit the compartment backwards`,
					`With optional BE Secure Overhead Sensor System, there is never a breach.\nUnauthorized user always exits to the unsecured side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
				delay: [0, 5, 9, 14, 17, 19],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile unlocks outbound\nallowing egress only`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Finish Options</span>`,
				content: [
					`Turnstile available in galvanized steel, powder-coated steel or stainless steel`,
					3,
					`Tandem space-saving models available`,
					`Metal screens can be installed in addition to horizontal bars`,
				],
			},
		},

		// src: buttonsText[1],
	},
}

const rotationContent = {
	turnlock10:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock100/Turnlock100.spin',
	tourlock18:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin',
	lifelineSw:
		'https://rotation.marketscale.com/Companies/BoonEdam/LifeLineSwing/LifeLineSwing.spin',
	circlelockSo:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin',
}
// Display fullscreen button
if (!isMobile) {
	fullscreen_button.style.display = 'none'
}
// else {
// if (isIOS) {
// 	fullscreen_button.style.display = 'none'
// }
// }

// if (isMac) {
// 	alertdiv.style.display = 'flex'
// }

// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay) {
	if (videoToPause) {
		videoToPause.pause()
	}

	videoToVanish.classList.add('short-vanish')

	videoToPlay.style.opacity = 1
	setTimeout(() => {
		videoToPlay.play()
	}, 0)
}

// loop.currentTime = 60
// Vanish/show the main buttons and svgs
function HideShowMainButtons() {
	mainButtons.classList.toggle('show')
	mainButtons.classList.toggle('disabled')
	mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
	showCont.classList.remove('hidden')
	showCont.classList.toggle('short-vanish')
	showCont.classList.toggle('show')
}

// Set animations for the buttons
function animations() {
	console.trace()
	if (pCont) {
		// paragraph.style.animation = 'fadein 0.5s ease-in-out forwards'

		const elementContainers = document.querySelectorAll('.elementContainer')

		titleH2.style.animation =
			'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
		greenLine.style.animation =
			'growWide 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
		greenLine.style.animationDelay = '0.4s'
		createdSubTitle.style.animation =
			'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
		createdSubTitle.style.animationDelay = '0.4s'
		let counter = 0.3
		if (delay) {
			console.log(delay)
			let inputArray = []
			let bool = false
			subVideo2.addEventListener('timeupdate', function () {
				console.log(subVideo2.currentTime)
				//currentTime use second, if you want min *60

				delay.forEach((element, i) => {
					if (Math.floor(subVideo2.currentTime) === element) {
						if (inputArray.length === 0) {
							elementContainers[i].style.animation =
								'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

							inputArray.push(Math.floor(subVideo2.currentTime))
							console.log(inputArray)
						} else {
							if (
								element ===
								inputArray.find((num) => {
									return num === element
								})
							) {
							} else {
								elementContainers[i].style.animation =
									'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
								inputArray.push(Math.floor(subVideo2.currentTime))
								console.log(inputArray)
								console.log(inputArray.length)
								console.log(delay)
								console.log(delay.length)
							}
						}
					}
				})

				if (inputArray.length === delay.length && !bool) {
					let removeCount = inputArray.length
					let elementContainersArray = Array.from(elementContainers)
					// console.log(elementContainersArray)
					elementContainersArray.splice(0, removeCount)

					elementContainersArray.forEach((element, i) => {
						element.style.animation =
							'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
						element.style.animationDelay = `${counter}s`
						counter += 0.2
					})
					bool = true
				}
			})
		} else {
			console.log('else delay')

			elementContainers.forEach((element, i) => {
				element.style.animation =
					'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

				element.style.animationDelay = `${counter}s`
				counter += 0.1

				// setTimeout(() => {
				// 	element.style.animation = 'fadein 0.5s ease-in-out forwards'
				// }, 2000)
			})
		}

		buttonGridContainer.style.animation =
			'slideFromBottom 0.5s ease-out forwards'
		buttonGridContainer.style.animationDelay = `${counter}s`
		backButtonContainer.style.animation = 'slideFromTop 0.5s ease-out forwards'
		brandIcon.style.animation = 'show 0.5s ease-out forwards'
		brandIcon.style.animationDelay = `${counter}s`
		backButtonContainer.style.animationDelay = `${counter}s`
	}

	if (boxVideo) {
		boxVideo.forEach((e, i) => {
			boxVideo[i].style.animation =
				'growVideo 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
			boxVideo[i].style.animationDelay = '1.8s'
		})
	}
}

// Create the video tags storaged in videoContainer div
function createSubVideos(source1, source2, source3) {
	if (source1) {
		subVideo1 = document.createElement('video')
		subVideo1.src = source1
		subVideo1.muted = true
		subVideo1.setAttribute('playsinline', 'playsinline')
		subVideo1.controls = false
		subVideo1.autoplay = true
		subVideo1.classList.add('video')
		subVideo1.style.opacity = 0
		subVideo1.pause()
		// loopContainer.appendChild(subVideo1)
		subVideo1Container.appendChild(subVideo1)
	}

	if (source2) {
		subVideo2 = document.createElement('video')
		subVideo2.src = source2
		// subVideo2.loop = true
		subVideo2.muted = true
		subVideo2.setAttribute('playsinline', 'playsinline')
		subVideo2.controls = false
		subVideo2.autoplay = true
		subVideo2.classList.add('subVideo')
		subVideo2.style.opacity = 0
		subVideo2.pause()
		// loopContainer.appendChild(subVideo2)
		subVideo2Container.appendChild(subVideo2)
	}
	if (source3) {
		subVideo3 = document.createElement('video')
		subVideo3.src = source3
		subVideo3.muted = true
		subVideo3.autoplay = true
		subVideo3.setAttribute('playsinline', 'playsinline')
		subVideo3.controls = false
		subVideo3.classList.add('subVideo')
		subVideo3.style.opacity = 0
		subVideo3.pause()
		// loopContainer.appendChild(subVideo3)
		subVideo3Container.appendChild(subVideo3)
	}
}
function createVideos(source1, source2, source3) {
	if (source1) {
		video1 = document.createElement('video')
		video1.src = source1
		video1.muted = true
		video1.setAttribute('playsinline', 'playsinline')
		video1.controls = false
		video1.autoplay = true
		video1.classList.add('video')
		video1.style.opacity = 0
		video1.pause()

		video1Container.appendChild(video1)
	}

	if (source2) {
		video2 = document.createElement('video')
		video2.src = source2
		video2.loop = true
		video2.muted = true
		video2.setAttribute('playsinline', 'playsinline')

		video2.controls = false
		video2.autoplay = true
		video2.classList.add('video')
		video2.style.opacity = 0
		video2.pause()

		video2Container.appendChild(video2)
	}
	if (source3) {
		video3 = document.createElement('video')
		video3.src = source3
		video3.muted = true
		video3.autoplay = true
		video3.setAttribute('playsinline', 'playsinline')
		video3.controls = false
		video3.classList.add('video')
		video3.style.opacity = 0
		video3.pause()

		video3Container.appendChild(video3)
	}
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph
function createContent(obj, parent) {
	console.trace()
	delay = ''

	textLeft = obj.textLeft
	textTop = obj.textTop
	textRight = obj.textRight
	textBottom = obj.textBottom
	labelTitle = obj.title
	pContent = obj.content
	subTitle = obj.subTitle
	inputButtonGrid = obj.inputButtonGrid
	inputButtonId = obj.inputButtonId
	delayInput = obj.delay

	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_text')
	const textContainerMade = document.createElement('div')
	textContainerMade.classList.add('textContainer')
	textContainerMade.style.width = containVideoWidth + 'px'
	textContainerMade.style.height = containVideoHeight + 'px'

	firstPage = document.createElement('div')
	firstPage.classList.add('firstPage')

	firstPage.style.right = textRight
	firstPage.style.top = textTop
	firstPage.style.left = textLeft
	firstPage.style.bottom = textBottom

	textContent = document.createElement('div')
	textContent.classList.add('text')
	buttonGridContainer = document.createElement('div')
	buttonGridContainer.classList.add('buttonGridContainer')
	buttonGrid = document.createElement('div')

	buttonGrid.classList.add('buttonGrid')

	// let buttonShort = []

	if (inputButtonGrid) {
		inputButtonGrid.forEach((e, i) => {
			// console.log(e)
			// const splitText = e
			// 	.replace(/[\n\r]+|[\s]{2,}/g, ' ')
			// 	.trim()
			// 	.split(' ')

			// splitText[1]
			// 	? (buttonShort[i] =
			// 			splitText[0].toLowerCase() + splitText[1].substring(0, 1))
			// 	: (buttonShort[i] = splitText[0].toLowerCase())

			buttonShort[i] = inputButtonId[i]

			const subButton = document.createElement('button')
			subButton.classList.add('pageButton')
			subButton.style.width = `calc(60px + (145 - 60) * ((${
				containVideoWidth + 'px'
			} - 320px) / (1440 - 320)))`
			subButton.textContent = e
			subButton.style.fontSize = buttonFontvar
			buttonGrid.appendChild(subButton)
			buttonDimensions = subButton

			// subbutton function
			subButton.addEventListener('click', function () {
				HideShowCont()

				setTimeout(() => {
					showCont.innerHTML = ''
				}, 500)

				pageIndex = buttonShort[i]
				// 	// Con esto veo que boton es /////////////////////////////////

				createSubVideos(
					`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}1.mp4`,
					`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}2.mp4`,
					`assets/${parent}/${buttonShort[i]}/${buttonShort[i]}3.mp4`
				)
				check1()
				let videosCheck = false
				function check1() {
					clearcheck = setInterval(repeatcheck, 600)
					function repeatcheck() {
						if (
							subVideo1.readyState === 4 &&
							subVideo2.readyState === 4 &&
							subVideo3.readyState === 4
						) {
							videosCheck = true
						}
						setTimeout(() => {
							if (!videosCheck) {
								loader.style.zIndex = '200'
								loader.classList.add('show')
							}
						}, 3000)
						if (videosCheck) {
							loader.classList.remove('show')
							loader.classList.add('short-vanish')
							loader.style.zIndex = '-200'
							clearInterval(clearcheck)
							// console.log('creando contenido')
							// console.log(parent)
							globalParent = parent

							createContent(
								buttonContent[parent].boxInfo[pageIndex],

								parent
							)
							textContent.style.height = '100%'
							video2.classList.add('short-vanish')
							subVideo1.style.opacity = 1
							setTimeout(() => {
								subVideo1.play()
								subVideo1.addEventListener('ended', () => {
									console.log('subVideo1 ending')
									// createBackButton()
									animations()
									InterpolateVideo(video3, subVideo1, subVideo2)

									HideShowCont()
								})
							}, 0)
						}
					}
				}
			})
		})
	}

	// function createSubVideoBackLoop() {
	// 	subVideoBackLoop = document.createElement('video')
	// 	subVideoBackLoop.src = `assets/${parent}/${parent}BackLoop.mp4`
	// 	subVideoBackLoop.muted = true
	// 	subVideoBackLoop.autoplay = true
	// 	subVideoBackLoop.setAttribute('playsinline', 'playsinline')
	// 	subVideoBackLoop.controls = false
	// 	subVideoBackLoop.classList.add('subVideo')
	// 	// subVideoBackLoop.classList.add('short-vanish')
	// 	subVideoBackLoop.style.opacity = 0
	// 	subVideoBackLoop.pause()
	// 	subVideoBackLoopContainer.appendChild(subVideoBackLoop)
	// }
	// function createSubVideoTurn() {
	// 	subVideoTurn = document.createElement('video')
	// 	subVideoTurn.src = `assets/${parent}/${parent}Turn.mp4`
	// 	subVideoTurn.muted = true
	// 	subVideoTurn.autoplay = true
	// 	subVideoTurn.setAttribute('playsinline', 'playsinline')
	// 	subVideoTurn.controls = false
	// 	subVideoTurn.classList.add('subVideo')
	// 	subVideoTurn.style.opacity = 0
	// 	subVideoTurn.currentTime = 0
	// 	subVideoTurn.pause()
	// 	subVideoTurnContainer.appendChild(subVideoTurn)
	// }

	if (pContent) {
		pCont = document.createElement('div')
		pCont.classList.add('pCont')

		// list = document.createElement('ul')
		titleH2 = document.createElement('span')
		titleH2.classList.add('title1')
		titleH2.style.fontSize = globalBigTitleFontvar
		titleH2.innerHTML = labelTitle
		greenLine = document.createElement('hr')
		paragraph = document.createElement('p')
		titleH2.appendChild(greenLine)

		// paragraph.textContent = pContent
		// titleH2.style.fontSize = globalFontvar
		paragraph.style.fontSize = globalFontvar

		if (subTitle) {
			createdSubTitle = document.createElement('span')
			createdSubTitle.classList.add('createdSubtitle')
			createdSubTitle.textContent = subTitle
			createdSubTitle.style.fontWeight = 'bold'
			createdSubTitle.style.fontSize = globalMediumTitleFontvar
			titleH2.appendChild(createdSubTitle)
		}
		// el unico vivo
		createBackButton()
		if (Array.isArray(pContent)) {
			if (delayInput) {
				delay = delayInput
			}

			pContent.forEach((e, i) => {
				if (Number.isInteger(e)) {
					elementContainer = document.createElement('span')
					elementContainer.classList.add('elementContainer', 'imageContainer')
					for (let i = 0; i < e; i++) {
						let image = document.createElement('img')
						image.src = `assets/${parent}/${pageIndex}/${pageIndex}${i + 1}.png`
						image.style.width = '7em'
						elementContainer.appendChild(image)
						paragraph.appendChild(elementContainer)
					}
				} else {
					elementContainer = document.createElement('span')
					elementContainer.classList.add('elementContainer')
					icon = document.createElement('img')
					icon.src = 'assets/icons/bp.png'
					icon.style.width = '1.3em'

					element = document.createElement('span')
					element.textContent = e
					element.style.fontSize = globalFontvar
					elementContainer.appendChild(icon)
					elementContainer.appendChild(element)
					paragraph.appendChild(elementContainer)
				}
			})
		}

		pCont.appendChild(titleH2)
		pCont.appendChild(paragraph)
		textContent.appendChild(pCont)
	}

	firstPage.appendChild(textContent)
	buttonGridContainer.appendChild(buttonGrid)
	if (pageIndex === 'mainMenuFront') {
		threesixty = document.createElement('img')
		threesixty.classList.add('threesixty')
		threesixty.src = '../assets/icons/360logo.png'
		threesixty.addEventListener('click', () => {
			createRotation()
		})
		buttonGridContainer.appendChild(threesixty)
	}

	firstPage.appendChild(buttonGridContainer)

	showCont.appendChild(centerContainerMade)

	centerContainerMade.appendChild(textContainerMade)
	textContainerMade.appendChild(firstPage)
}

// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function setFontSizes() {
	const button = document.querySelectorAll('.button')

	const titulo = document.querySelector('.titulo')
	const mainBoxText = document.querySelector('.mainBoxText')

	globalFontvar = `calc(6px + (18 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	globalTitleFontvar = `calc(14px + (27 - 14) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalMediumTitleFontvar = `calc(12px + (35 - 12) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalBigTitleFontvar = `calc(14px + (45 - 14) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	buttonFontvar = `calc(4px + (15 - 4) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	// mainBoxText.style.fontSize = globalFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = globalFontvar
	}
	titulo.style.fontSize = globalTitleFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = globalFontvar
		button[i].style.width = `calc(85px + (220 - 85) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`
	}
}
function createRotation() {
	console.log(pageIndex)
	if (rotation) {
		rotation.innerHTML = ''
	}
	loader.classList.remove('short-vanish')
	loader.style.zIndex = '1'
	initial.style.zIndex = '0'
	initial.classList.remove('short-vanish')
	initial.classList.add('show')

	// HideShowMainButtons()
	HideShowCont()
	rotation.classList.toggle('show')
	rotation.classList.toggle('hidden')

	window.addEventListener('resize', resizeRotation)

	setTimeout(() => {
		const centerContainerMade = document.createElement('div')
		centerContainerMade.classList.add('centerContainer')
		centerContainerMade.setAttribute('id', 'centerContainer_model')
		const model = document.createElement('div')
		model.classList.add('Sirv')

		model.setAttribute('data-src', rotationContent[currentButton])

		rotation.appendChild(model)
		createBackButton('rotationPage')
	}, 0)
}

function resizeRotation() {
	const rotationBackButton = document.querySelector('#rotation_backButton')
	if (rotationBackButton) {
		rotationBackButton.remove()
	}
	ArreglarLineas()
	createBackButton('rotationPage')
}

function exitRotation() {
	ArreglarLineas()
	backButtonRotation.style.pointerEvents = 'none'
	// const centerContainerBackButton = document.querySelector(
	// 	'#centerContainer_backButton'
	// )
	// centerContainerBackButton.remove()
	console.log('remove show')
	rotation.classList.remove('show')
	rotation.classList.add('short-vanish')
	// rotation.innerHTML = ''

	// createBackButton()
	HideShowCont()
	window.removeEventListener('resize', resizeRotation)
}
function backButtonFunction() {
	console.log('backbuttonfunction')
	console.log(buttonGridContainer)

	ArreglarLineas()
	buttonGrid.style.pointerEvents = 'none'
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(video2, video2, video3)
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	video3.addEventListener('ended', () => {
		video3.classList.add('short-vanish')
		loop.classList.remove('short-vanish')
		setTimeout(() => {
			loop.play()
			video1.remove()
			video2.remove()
			video3.remove()
		}, 0)

		HideShowMainButtons()

		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}

		showCont.innerHTML = ''
	})
}
function backButtonFunctionFromBack() {
	console.log('working')
	ArreglarLineas()

	subVideoTurn.play()
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	subVideoTurn.addEventListener('ended', () => {
		console.log('subVideoTurn ending')
		loop.classList.remove('short-vanish')
		HideShowMainButtons()
		setTimeout(() => {
			loop.play()
		}, 0)
		subVideoTurn.classList.add('short-vanish')
		console.log(pageIndex)
		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}
		video1.remove()
		video2.remove()
		video3.remove()
		showCont.innerHTML = ''
	})
}

function backButtonFunctionFront() {
	ArreglarLineas()

	console.log('backbuttonfunctionfront')
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3)
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		subVideo3.classList.add('short-vanish')
		video2.classList.remove('short-vanish')
		showCont.innerHTML = ''
		console.log('back from back')
		console.log(buttonContent[dataId[0]].content)
		pageIndex = 'mainMenuFront'
		createContent(
			buttonContent[dataId[0]],

			dataId[0]
		)
		animations()
		// backButton.style.pointerEvents = 'all'

		// createBackButton()
		HideShowCont()
		subVideo1.remove()
		subVideo2.remove()
		subVideo3.remove()
	})
}

function backButtonFunctionBack() {
	ArreglarLineas()
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3)
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		subVideo3.classList.add('short-vanish')
		subVideoTurn.classList.remove('short-vanish')
		showCont.innerHTML = ''
		pageIndex = 'mainMenuBack'
		createContent(
			buttonContent[dataId[1]],

			dataId[1]
		)
		// backButton.style.pointerEvents = 'all'

		// createBackButton()
		HideShowCont()
		// subVideo1.remove()
		// subVideo2.remove()
		// subVideo3.remove()
	})
}

function createBackButton(param) {
	console.log(pageIndex)
	if (param === 'rotationPage') {
		const centerContainerMade = document.createElement('div')
		centerContainerMade.classList.add('centerContainer')
		centerContainerMade.setAttribute('id', 'centerContainer_text')
		const textContainerMade = document.createElement('div')
		textContainerMade.classList.add('textContainer')
		textContainerMade.style.width = containVideoWidth + 'px'
		textContainerMade.style.height = containVideoHeight + 'px'
		rotationPage = document.createElement('div')
		rotationPage.classList.add('rotationPage')

		backButtonRotation = document.createElement('button')
		backButtonRotation.classList.add('backButton')
		backButtonRotation.style.fontSize = buttonFontvar
		backButtonRotation.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		backButtonRotation.classList.add('button')
		backButtonRotation.addEventListener('click', exitRotation)
		console.log(backButtonRotation)
		backButtonRotation.textContent = 'Back'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = '../assets/icons/150logo.png'
		brandIcon.classList.add('brandIcon', 'brandIconR')
		backButtonContainer.classList.add('viewRContainer')
		rotation.appendChild(centerContainerMade)
		centerContainerMade.appendChild(textContainerMade)

		textContainerMade.appendChild(rotationPage)
		rotationPage.appendChild(backButtonContainer)
		backButtonContainer.appendChild(backButtonRotation)
		backButtonContainer.appendChild(brandIcon)
		centerContainerMade.setAttribute('id', 'rotation_backButton')
	} else {
		// const centerContainerMade = document.createElement('div')
		// centerContainerMade.classList.add('centerContainer')
		// centerContainerMade.setAttribute('id', 'centerContainer_backButton')
		// buttonContainerMade = document.createElement('div')
		// buttonContainerMade.classList.add('buttonContainer')
		// buttonContainerMade.style.width = containVideoWidth + 'px'
		// buttonContainerMade.style.height = containVideoHeight + 'px'
		backButton = document.createElement('button')
		backButton.classList.add('backButton')
		backButton.style.fontSize = buttonFontvar
		backButton.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`
		// if (buttonDimensions !== 0) {

		// 	backButton.style.width = buttonDimensions.offsetWidth + 'px'
		// 	backButton.style.height = buttonDimensions.offsetHeight + 'px'
		// }

		backButton.classList.add('button')

		backButton.textContent = 'Back'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = '../assets/icons/150logo.png'
		brandIcon.classList.add('brandIcon')
		backButtonContainer.classList.add('backButtonContainer')
		// if (pos) {
		// 	backButtonContainer.style.justifyContent = 'flex-end'
		// 	backButton.style.marginRight = '4%'
		// }
		// showCont.appendChild(centerContainerMade)
		// centerContainerMade.append(buttonContainerMade)
		firstPage.appendChild(backButtonContainer)

		backButtonContainer.appendChild(backButton)
		backButtonContainer.appendChild(brandIcon)
		if (param === 'rotation') {
			// rotation.appendChild(centerContainerMade)
			// rotation.appendChild(centerContainerMade)
			// backButton.style.pointerEvents = 'all'
			// centerContainerMade.setAttribute('id', 'rotation_backButton')
		} else if (
			pageIndex === 'standardO' ||
			pageIndex === 'piggybackingP' ||
			pageIndex === 'emergencyE' ||
			pageIndex === 'finishO'
		) {
			console.log('submenu')
			backButton.addEventListener('click', backButtonFunctionFront)
		} else if (
			pageIndex === 'easyR' ||
			pageIndex === 'ex78934S' ||
			pageIndex === 'kr-bkzdinB'
		) {
			backButton.addEventListener('click', backButtonFunctionBack)
		} else if (pageIndex === 'mainMenuFront') {
			backButton.addEventListener('click', backButtonFunction)
		} else if (pageIndex === 'mainMenuBack') {
			backButton.addEventListener('click', backButtonFunctionFromBack)
		}
	}
}

function ArreglarLineas() {
	for (let i = 0; i < svgContainer.length; i++) {
		svgContainer[i].style.width = containVideoWidth + 'px'
		svgContainer[i].style.height = containVideoHeight + 'px'
	}
	for (let i = 0; i < buttonContainer.length; i++) {
		buttonContainer[i].style.width = containVideoWidth + 'px'
		buttonContainer[i].style.height = containVideoHeight + 'px'
	}
	// mainButtons.style.opacity = '0'
	if (!mainButtons.classList.contains('disabled')) {
		mainButtons.classList.add('show')
	}
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
	var oRatio = width / height,
		cRatio = cWidth / cHeight
	return function () {
		if (contains ? oRatio > cRatio : oRatio < cRatio) {
			this.width = cWidth
			this.height = cWidth / oRatio
		} else {
			this.width = cHeight * oRatio
			this.height = cHeight
		}
		this.left = (cWidth - this.width) * (pos / 100)
		this.right = this.width + this.left
		return this
	}.call({})
}

function getImgSizeInfo(img) {
	var pos = window
		.getComputedStyle(img)
		.getPropertyValue('object-position')
		.split(' ')
	return getRenderedSize(
		true,
		img.offsetWidth,
		img.offsetHeight,
		img.videoWidth,
		img.videoHeight,
		parseInt(pos[0])
	)
}

loop.addEventListener('loadedmetadata', function (e) {
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	setFontSizes()
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
})

if (loop.readyState >= 1) {
	setFontSizes()
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
}

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	}
})

window.addEventListener('resize', function () {
	if (loop.readyState >= 1) {
		containVideoWidth = getImgSizeInfo(loop).width
		containVideoHeight = getImgSizeInfo(loop).height

		setFontSizes()

		if (!mainButtons.classList.contains('disabled')) {
			ArreglarLineas()
		}
	}
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			warning.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
	// if(){}
})

////////// Event Listeners for the main buttons //////////

fullscreen_button.addEventListener('click', function (e) {
	expand.classList.toggle('disabledb')
	contract.classList.toggle('disabledb')

	if (!document.fullscreenElement) {
		mainContainer.webkitRequestFullscreen()
		mainContainer.webkitEnterFullscreen()
		mainContainer.requestFullscreen()
	} else {
		document.exitFullscreen()
		document.webkitExitFullscreen()
	}
})

mainMenuB.forEach((e, i) => {
	e.addEventListener('click', function (e) {
		// if (dataId[i] === 'view3') {
		// 	console.log('perraje')
		// 	return
		// }
		console.log(dataId[i])
		pageIndex = 'mainMenuFront'
		currentButton = dataId[i]
		HideShowMainButtons()

		createVideos(
			`assets/${dataId[i]}/${dataId[i]}1.mp4`,
			`assets/${dataId[i]}/${dataId[i]}2.mp4`,
			`assets/${dataId[i]}/${dataId[i]}3.mp4`
		)
		/////////////////////////// CURRENT

		if (showCont.innerHTML !== '') {
			setTimeout(() => {
				showCont.innerHTML = ''
			}, 0)
		}

		createContent(buttonContent[dataId[i]], dataId[i])

		window.addEventListener('resize', function (e) {
			if (showCont.hasChildNodes()) {
				const textContainer = document.querySelector('#centerContainer_text')

				const backButtonContainer = document.querySelector(
					'#centerContainer_backButton'
				)
				textContainer.remove()

				// backButtonContainer.remove()
				console.log(pageIndex)
				if (pageIndex === 'mainMenuFront') {
					console.log(globalParent)
					console.log(buttonContent[globalParent])
					createContent(
						buttonContent[dataId[i]],

						dataId[i]
					)
				} else {
					console.log(globalParent)
					console.log(buttonContent[globalParent])

					createContent(
						buttonContent[globalParent].boxInfo[pageIndex],

						dataId[i]
					)
				}

				animations()

				// if (buttonsText[i] === 'whyF') {
				// 	createBackButton('pos')
				// } else {
				// createBackButton()
				// }
			}
		})
		check1()
		let videoscheck = false
		function check1() {
			clearcheck = setInterval(repeatcheck, 600)
			function repeatcheck() {
				if (video1.readyState === 4) {
					videoscheck = true
				}

				setTimeout(() => {
					if (!videoscheck) {
						loader.style.zIndex = '200'
						loader.classList.add('show')
					}
				}, 3000)

				if (videoscheck) {
					loader.classList.remove('show')
					loader.classList.add('short-vanish')
					loader.style.zIndex = '-200'

					clearInterval(clearcheck)

					loop.classList.add('short-vanish')
					video1.style.opacity = 1

					setTimeout(() => {
						video1.play()
						video1.addEventListener('ended', () => {
							// if (buttonsText[i] === 'whyF') {
							// 	createBackButton('pos')
							// } else {
							// createBackButton()
							// }

							animations()

							InterpolateVideo(loop, video1, video2)
							if (
								dataId[i] === 'whyF' ||
								dataId[i] === 'in-houseT' ||
								dataId[i] === 'useC'
							) {
								console.log(video2, video3)
								video2.loop = false
								video2.addEventListener('ended', () => {
									console.log('se ha hecho ')

									backButtonFunction()
								})
							}
							HideShowCont()
						})
					}, 0)
				}
			}
		}
		// a
	})
})

// Check when the spinner is fully loaded
var SirvOptions = {
	spin: {
		onready: function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'

			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		},
	},
}

close.addEventListener('click', function (e) {
	modalalert.style.pointerEvents = 'none'
	modalalert.style.transform = 'scale(0)'
	alertdiv.style.opacity = 0
	alertdiv.style.pointerEvents = 'none'
})
