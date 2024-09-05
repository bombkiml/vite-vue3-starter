import { Provider } from "@/hooks/APIs/Provider";

function isAlive(cb) {
  Provider.get("/api/rehcancer/getCervixScreeningHpv16_18ByDate/2021-01-01/2021-01-30")
    .then((_data) => {
      if (_data.data.ok == "ok") {
        // alive
        cb(null, _data);
      } else {
        cb(_data, null);
      }
    })
    .catch((err) => {
      cb(err, null);
    });
}

export default { isAlive };
