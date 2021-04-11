import time
import json
from flask import Flask, jsonify, Response, request, render_template, stream_with_context, make_response
from flask_cors import CORS
from element_generator import generate_element_updates


app = Flask(__name__)
#Import config details
app.config.from_object("config.DevelopmentConfig")
#Allow cross origin resource sharing between flask backend and react frontend
CORS(app)


def set_freq(val):
    app.config["UPDATE_FREQUENCY_MILLISECONDS"] = val

#Generates data stream at a fixed interval for updates
def generate_stream():
    time.sleep(float(app.config["UPDATE_FREQUENCY_MILLISECONDS"])/1000)
    element_update = generate_element_updates(app.config["ELEMENTS_PER_UPDATE"],app.config["SYMBOLS"])
    _data = json.dumps(element_update)
    print(_data)
    return _data

#Method that runs forever upon being called and streams data
@app.route('/subscribeElements')
def stream():
    def eventStream():
        while True:
            # wait for source data to be available, then push it
            _data = generate_stream()
            yield f"id: 1\ndata: {_data}\nevent: online\n\n"

    return Response(eventStream(), mimetype="text/event-stream")


#Method to update the frequency 
@app.route('/updateFrequency', methods=['POST'])
def get_data():
    receivedData = request.form.get('frequency')
    print('Recieved from client: {}'.format(receivedData))
    if receivedData is not None:
        if receivedData.isnumeric():
            set_freq(float(receivedData))
            return make_response("Frequency updated", 200)

    else: 
        return make_response("Frequency must be an integer or float", 403)

    

