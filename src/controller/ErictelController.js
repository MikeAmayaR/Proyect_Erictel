import ErictelServices from "../services/ErictelServices.js";

const clas = "ErictelController";

class ErictelController {
  static async getDataRick() {
    try {
      const getData = await ErictelServices.getDataRick();
      console.log("getData", getData.data.results);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }

  static async insertDataRick(req, res) {
    let response;
    try {
      const createRick = await ErictelServices.insertDataRick(req.body);
      response = {
        status: 202,
        code: "LR01",
        type: "success",
        message: "Data register succesfully",
        data: createRick,
      };
      return res.send(response);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }

  static async  updateDataRick(req, res) {
    let response;
    try {
      const updateRick = await ErictelServices.updateDataRick(req.body);
      response = {
        status: 202,
        code: "LR01",
        type: "success",
        message: "Data updated succesfully",
        data: updateRick,
      };
      return res.send(response);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }


  static async createUser(req, res) {
    let response;
    try {
      const getData = await ErictelServices.getUser(req.body);
      console.log("getData", getData);

      const data = getData.find((element) => element.Role === req.body.Role);
      if (data) {
        response = {
          status: 202,
          code: "LR02",
          type: "success",
          message: "User Already exists",
        };
      } else {
        const createUser = await ErictelServices.insertUser(req.body);
        response = {
          status: 202,
          code: "LR01",
          type: "success",
          message: "User Register succesfully",
          data: createUser,
        };
      }
      return res.send(response);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }

  static async getDatatUser(req, res) {
    let response;
    const paramsUrl = req.params;

    try {
      const getUser = await ErictelServices.getUser(paramsUrl);
      if (getUser[0]) {
        response = {
          status: 202,
          code: "LR01",
          message: "User found succesfully",
          data: getUser,
        };
      } else {
        response = {
          status: 400,
          code: "LR02",
          message: "User not found",
          data: {},
        };
      }
      return res.send(response);
    } catch (error) {
      console.error(clas, error);
      return error;
    }
  }
}

export default ErictelController;
