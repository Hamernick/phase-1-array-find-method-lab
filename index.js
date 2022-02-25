function superbowlWin(recordsArray) {
    const foundRecord = recordsArray.find(record => record.result === "W")
    return foundRecord && foundRecord.year;
};