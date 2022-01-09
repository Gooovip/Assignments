export function formatApiData(data) {
    // console.log(data.reports[0].data);
    let text1 = "DimensionName: ";
    let text2 = "MetricName: ";
    let text3 = "Totals: ";
    return [
      data.reports[0].data.rows.map(function (val) {
        for (let val1 in val.metrics[0]) {
          for (let val2 in val.dimensions) {
            return (
              text1 +
              val.dimensions[val2] +
              " " +
              text2 +
              val.metrics[0][val1][0] +
              " , " +
              val.metrics[0][val1][1] +
              " "
            );
          }
        }
      }),
      text3 + data.reports[0].data.totals[0].values
    ];
  }