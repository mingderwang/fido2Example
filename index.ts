import { Fido2Lib } from 'fido2-lib';
const f2l = new Fido2Lib({
    timeout: 60000,
    rpId: "example.com",
    rpName: "ACME",
    rpIcon: "https://example.com/logo.png",
    challengeSize: 128,
    attestation: "none",
    cryptoParams: [-7, -257],
    authenticatorAttachment: "platform",
    authenticatorRequireResidentKey: false,
    authenticatorUserVerification: "required"
});
const registrationOptions = await f2l.attestationOptions();
registrationOptions.user.id = Uint8Array.from(Array(32).fill(0x00));
registrationOptions.user.name = "test";
registrationOptions.user.displayName = "test";
console.log(registrationOptions)

const attestationExpectations = {
    challenge: "33EHav-jZ1v9qwH783aU-j0ARx6r5o-YHh-wd7C6jPbd7Wh6ytbIZosIIACehwf9-s6hXhySHO-HHUjEwZS29w",
    origin: "https://localhost:8443",
    factor: "either"
};

const regResult = await f2l.attestationResult(clientAttestationResponse, attestationExpectations); // will throw on error

console.log(regResult.authnrData)