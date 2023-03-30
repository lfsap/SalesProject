const cds = require("@sap/cds");
const { SalesHeader } = cds.entities("com.lfsales");

module.exports = (srv) => {
    //******READ******/
    srv.on("READ", "SalesHeader", async (req) => {
        if (req.data.id !== undefined) {
            return await SELECT.from`com.lfsales.SalesHeader`
                .where`Id = ${req.data.id}`;
        }
        return await SELECT.from(Orders);
    });

    srv.after("READ", "SalesHeader", (data) => {
        data.map((salesheader) => { salesheader.Reviewed = true });
    });
}