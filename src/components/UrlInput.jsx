import { Button } from "./Button";
import React, { useState } from 'react';
export  function UrlInput() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    var url=''
    if(inputValue.includes("amazon"))
      url = parseTheAmazonUrl(inputValue)
    else
      url = parseTheEbayUrl(inputValue)

    if(url==''){
      url="url short failed"
    }
    setResult(url)
  }
  function parseTheAmazonUrl(url) {
    let questionCutted = url.split("?");
    let slicedURL = questionCutted[0].split("/");
    let ASIN = "";
    let targetGP = slicedURL.indexOf("gp");
    let targetDP = slicedURL.indexOf("dp");
    let targetPD = slicedURL.indexOf("product");
    let doaminname = slicedURL[2];
    if (targetDP != -1) {
        ASIN = slicedURL[targetDP + 1];
    }
    else {
        if (targetGP != -1) {
            if (targetGP + 1 == targetPD) {
                ASIN = slicedURL[targetPD + 1];
            } else {
            }
        }
        else {
        }
    }
    if (ASIN == "") {
      return (questionCutted[0]);
    }
    else {
        let ShortURL = castAsinToUrl(ASIN, doaminname);
        return ShortURL;
    }
}

function castDomainToUrl(domain) {
    return "https://" + domain
}

function castAsinToUrl(asin, domain) {
    return castDomainToUrl(domain) + "/dp/" + asin
}
  function parseTheEbayUrl(url) {
    var urlPattern = /ebay\.(com|de|co\.uk|com\.au|at|be|ca|fr|ie|it|com\.hk|com\.my|com\.sg|nl|ph|pl|es|ch)\/itm/;
    if (urlPattern.test(url)) {
        var idExt = /\/\d+\?/.exec(url)[0];
        var id = /\d+/.exec(idExt)[0];
        return 'http://www.' + urlPattern.exec(url)[0] + '/' + id;
    } else {
        return '';
    }
}
  return (
    <div>
      <label htmlFor="url" className="block text-lg font-medium text-gray-700 mx-10">
      Please copy the URL of eBay and Amazon into the input
      </label>
      <div className="mt-1">
        <input
          type="url"
          name="url"
          id="url"
          onChange={handleInputChange} value={inputValue}
          className="block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <Button
              type="submit"
              variant="solid"
              color="blue"
              onClick={handleButtonClick}
              className="w-300  mt-4 px-20"
            >
              <span>
                Short URL Now
              </span>
            </Button>
            {result.startsWith("http") && (
          <a href={result} className="block text-lg font-medium text-sky-500 mx-10 mt-5">
          {result}
        </a>
        )}
        {!result.startsWith("http") && (
          <label  className="block text-lg font-medium text-red-500 mx-10 mt-5">
          {result}
          </label>
        )}
           
    </div>
  )
}









