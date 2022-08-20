
export class LoginPage {
    emailTextBox = ':nth-child(1) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control';
    passwordTextBox = ':nth-child(2) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control';
    submitLogin = '.mr-auto > .btn';
    linkedin = 'https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D115224256%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522appId%2522%253A115224256%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Fwww.klob.id%252Flinkedin%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522state%2522%253A%2522847zWNPskYEPIHgV0WGu%2522%252C%2522creationTime%2522%253A1661007377859%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D115224256%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522appId%2522%253A115224256%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Fwww.klob.id%252Flinkedin%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522state%2522%253A%2522847zWNPskYEPIHgV0WGu%2522%252C%2522creationTime%2522%253A1661007377859%257D'
    google = 'https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.klob.id%3Fid%3Dauth861010&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=1094893002736-72s40epfa3ljh3jcm5sqllgq5nj1gq6v.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.klob.id&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow'
    enterEmail(email) {
        cy.get(this.emailTextBox).type(email)
    }

    enterPassword(password) {
        cy.get(this.passwordTextBox).type(password)
    }

    enterLogin(){
        cy.get(this.submitLogin).click()
    }

    redirectGoogleLogin(){
        cy.url(this.google)
    }

    redirectLinkedin(){
        cy.url(this.linkedin)
    }
}