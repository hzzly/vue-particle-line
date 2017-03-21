export default class Moon {
	constructor(ctx, width, height) {
		this.ctx = ctx
		this.width = width
		this.height = height
	}

	draw() {
		let ctx = this.ctx,
			gradient = ctx.createRadialGradient(100, 100, 60, 200, 200, 600)
			//月亮
			// gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
			// gradient.addColorStop(0.01, 'rgb(70,70,80)')
			// gradient.addColorStop(0.2, 'rgb(40,40,50)')
			gradient.addColorStop(0.4, 'rgb(20,20,30)')
			gradient.addColorStop(1, 'rgb(0,0,10)')
			ctx.save()
			ctx.fillStyle = gradient
			ctx.fillRect(0, 0, this.width, this.height)
			ctx.restore()
	}
}