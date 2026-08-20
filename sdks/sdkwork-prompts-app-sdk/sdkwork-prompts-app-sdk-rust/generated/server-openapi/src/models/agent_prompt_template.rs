use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AgentPromptTemplate {
    pub id: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub uuid: Option<String>,

    #[serde(rename = "promptId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub prompt_id: Option<String>,

    pub code: String,

    #[serde(rename = "displayName")]
    pub display_name: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    #[serde(rename = "promptKind")]
    pub prompt_kind: String,

    #[serde(rename = "templateFormat")]
    pub template_format: String,

    #[serde(rename = "templateBody")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub template_body: Option<String>,

    #[serde(rename = "safetyProfileId")]
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub safety_profile_id: Option<String>,

    pub status: i64,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub visibility: Option<i64>,
}
