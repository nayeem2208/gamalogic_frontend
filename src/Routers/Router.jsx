import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuickValidation from '../pages/QuickValidation'
import Body from '../components/Body'
import EmailFinder from '../pages/EmailFinder'
import ApiKey from '../pages/ApiKey'
import EmailVerification from '../pages/EmailVerification'
import FileEmailFinder from '../pages/FileEmailFinder'
import ApiDocs from '../pages/ApiDocs'
import FindAnyEmail from '../pages/FindAnyEmail'
import IntegrateGoogleSheet from '../pages/IntegrateGoogleSheet'
import AccountSettings from '../pages/AccountSettings'
import BuyCredits from '../pages/BuyCredits'
import Support from '../pages/Support'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Body/>}>
            <Route index element={<QuickValidation/>} />
            <Route path='/email-finder' element={<EmailFinder />} />
            <Route path='/api-Key' element={<ApiKey />} />
            <Route path='/email-verification-bulk' element={<EmailVerification/>} />
            <Route path='/email-finder-bulk' element={<FileEmailFinder/>} />
            <Route path='/api-docs' element={<ApiDocs/>} />
            <Route path='/find-any-email' element={<FindAnyEmail/>} />
            <Route path='/googleSheet-integration' element={<IntegrateGoogleSheet/>} />
            <Route path='/account-settings' element={<AccountSettings/>} />
            <Route path='/buyCredits' element={<BuyCredits/>} />
            <Route path='/support' element={<Support/>} />
        </Route>
    </Routes>
  )
}

export default Router
