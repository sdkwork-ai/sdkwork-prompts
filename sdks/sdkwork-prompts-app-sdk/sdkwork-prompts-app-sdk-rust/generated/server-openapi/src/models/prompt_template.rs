use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct PromptTemplate {
    pub id: String,

    pub key: String,

    pub name: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    pub status: String,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub tags: Option<Vec<String>>,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub latest_version_id: Option<String>,

    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub updated_at: Option<String>,
}
