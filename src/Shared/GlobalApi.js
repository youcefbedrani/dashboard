import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.51.12:1337",
  headers: {
    "X-API-Key":
      "d9583ce8314e019df6c8a68ac884e653f71f565dfa0475755720f018fd83c39978cff1e1859794add3410b2f6c50472e4aacb44e650c5eeb124ead1c6129317f07320f9872e7abf0497d2522ea672f2b5748ea95cc1d669ed29485a4f9483dd9210e06aa3d38996a8665caaf577207dd236f7f05d8e759eb126bee9836edcf62",
  },
});

const getUsers = async () => {
  try {
    const response = await api.get("/api/datas");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getTrucker = async () => {
  try {
    const response = await api.get("/api/truckers");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getAprovedTrucker = async () => {
  try {
    const response = await api.get("/api/aproved-truckers");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const setAprovedTrucker = async (info) => {
  try {
    await api
      .post("/api/aproved-truckers", { data: info })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
};

export default {
  getTrucker,
  getUsers,
  getAprovedTrucker,
  setAprovedTrucker,
};
