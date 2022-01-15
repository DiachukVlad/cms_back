module.exports = {
    async index(ctx) {
        const result = await strapi.services.reservations.find({ _where: { date: ctx.query.date, 'specialist.id': ctx.query.specialist}})
        
        const notFree = result.map((reservation)=>{
            return reservation.time.split(':')[0]
        })

        const free = []
        for (var i = 9; i<18; i++) {
            if (!notFree.includes(i.toString())) {
                free.push(i)
            }
        }
        ctx.send(free);
    },
};