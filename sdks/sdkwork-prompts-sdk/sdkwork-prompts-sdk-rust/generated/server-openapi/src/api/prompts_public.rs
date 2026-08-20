use std::sync::Arc;

use reqwest::Method;

use crate::api::paths::custom_path;
use crate::http::{SdkworkError, SdkworkHttpClient};

#[derive(Clone)]
pub struct PromptsPublicApi {
    client: Arc<SdkworkHttpClient>,
}

impl PromptsPublicApi {
    pub fn new(client: Arc<SdkworkHttpClient>) -> Self {
        Self { client }
    }

    pub async fn prompts_catalog_list(&self) -> Result<serde_json::Value, SdkworkError> {
        let path = custom_path(&"/prompts/catalog".to_string());
        self.client.request_method(Method::GET, &path, Option::<&serde_json::Value>::None, None, None, None, true, false).await
    }

}
