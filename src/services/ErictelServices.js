import database from "../repository/index.js";
import axios from "axios";
const clas = "LoginServices";

class ErictelServices {
  static async insertUser(params) {
    try {
      return await database.Users.create(params);
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }

  static async getDataRick() {
    const baseUrl = process.env.URL_API;
    try {
      return await axios.get(baseUrl)
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }

  static async insertDataRick(params) {
    try {
      return await database.Rick.create(params);
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }

  static async updateDataRick(params) {
    try {
      return await database.Rick.update(params,{
        where: {
          id_rick: params.id_rick
        }
      });
    } catch (error) {
      console.log(clas, error);
      throw error;
    }
  }
  
  static async getUser(params) {
    try {
      return await database.Users.findAll({
        where: {
          Mail: params.Mail
        },
      });
    } catch (error) {
      console.log(clas, error);
      return error;
    }
  }
}

export default ErictelServices;