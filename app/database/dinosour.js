var Sound = require('react-native-sound');

export function dinosourList(){
    dinosours = [
            {
                'id':1,
                'name':'Aazmi',
                'alphabet': 'A',
                'sound': 'sound.mp3',
                'image': require('../assests/images/dinosour.jpg'),
                'pronunciation': 'A-A',
                'sound': initSound('SampleAudio_0.4mb.mp3'),
            },
            {
                'id':2,
                'name':'Bazmi',
                'alphabet': 'B',
                'sound': 'sound.mp3',
                'image': require('../assests/images/dinosour2.jpg'),
                'pronunciation': 'A-B',
                'sound': initSound('SampleAudio_0.4mb.mp3'),
            },
            {
                'id':3,
                'name':'Cazmi',
                'alphabet': 'C',
                'sound': 'sound.mp3',
                'image': require('../assests/images/dinosour.jpg'),
                'pronunciation': 'A-C',
                'sound': initSound('SampleAudio_0.4mb.mp3'),
            },      
            ]

            return dinosours
}
function initSound(sound){
    const s = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
        } else {
                        // have to put the call to play() in the onload callback
        }
    })
    return s
}