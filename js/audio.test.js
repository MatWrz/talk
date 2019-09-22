import getUserAudio from './audio';

describe('should get user audio', () => {
  it('accepts MediaDevices and returns MediaStream', async () => {
    expect.assertions(1);
    const mediaStream = {
      getAudioTracks() {
        return [];
      }
    };
    const mediaDevicesMock = {
      getUserMedia: jest.fn(() => {
        return Promise.resolve(mediaStream);
      })
    };
    await getUserAudio(mediaDevicesMock).then(data =>
      expect(data.getAudioTracks()).toStrictEqual([])
    );
  });
});
