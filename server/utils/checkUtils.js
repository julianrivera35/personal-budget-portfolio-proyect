const checkBody = (json) => {
    if(!json.name || !json.budget){
        return false;
    }
    return true;
}

const checkId = (id, array) => {
    return array.findIndex(envelope => envelope.id === id);
}

const checkEnvelopeUpdate = (json) => {
    if(!json.name && !json.budget && !json.spent){
        return false;
    }
    return true;
}

export {checkBody, checkId, checkEnvelopeUpdate};