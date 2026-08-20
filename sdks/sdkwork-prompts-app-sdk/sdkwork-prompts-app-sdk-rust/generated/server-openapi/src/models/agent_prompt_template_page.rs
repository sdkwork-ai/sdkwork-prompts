use serde::{Deserialize, Serialize};

use crate::models::{AgentPromptTemplate};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AgentPromptTemplatePage {
    pub items: Vec<AgentPromptTemplate>,
}
