use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AdminPromptVersionCreateRequest {
    #[serde(rename = "versionNo")]
    pub version_no: String,

    pub title: String,

    pub content: String,

    #[serde(rename = "variableSchema")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub variable_schema: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "outputSchema")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub output_schema: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "modelConstraints")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub model_constraints: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "safetyPolicy")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub safety_policy: Option<std::collections::HashMap<String, serde_json::Value>>,

    #[serde(rename = "examplesJson")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub examples_json: Option<Vec<serde_json::Value>>,
}
