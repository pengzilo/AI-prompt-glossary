import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import Link from "@docusaurus/Link";
import { Form, Input, Button, message, Modal, Typography } from "antd";
import LoginComponent from "./login";
import Translate, { translate } from "@docusaurus/Translate";
import { submitPrompt } from "@site/src/api";
import { AuthContext } from './AuthContext';

const UserStatus = () => {
  const { userAuth, setUserAuth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // 这里的 handleLogout 可能需要调用一个注销 API，然后在返回成功后清除 userAuth
  const handleLogout = async (event) => {
    event.preventDefault();
    Cookies.remove("auth_token");
    Cookies.remove("username");
    setUserAuth(null);
    window.location.reload();
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await submitPrompt(values);
      window.location.reload();
      message.success(<Translate id="message.success">词条提交成功！</Translate>);
      message.success(<Translate id="message.success1">点击标签「你的提示词」查看已添加的自定义提示词。</Translate>);
      setOpen(false);
    } catch (err) {
      console.error(err);
      message.error(<Translate id="message.error">词条提交失败，请稍后重试</Translate>);
    } finally {
      setLoading(false);
    }
  };

  if (userAuth && userAuth.data) {
    return (
      <div>
        <Link to="/user" style={{ marginRight: "10px" }}>
          <Translate id="link.user">用户界面</Translate>
        </Link>
        <Button onClick={handleLogout} style={{ marginRight: "10px" }}>
          <Translate id="button.logout">注销</Translate>
        </Button>
        <Link className="button button--primary" onClick={() => setOpen(true)}>
          <Translate id="link.addprompt">添加自定义提示词</Translate>
        </Link>
        <Modal
          title={translate({id: "modal.addprompt.title", message: "分享 Prompt（本内容将出现在「你的提示词」标签中）"})}
          open={open}
          footer={null}
          onCancel={() => setOpen(false)}
        >
          <Form onFinish={onFinish}>
            <Form.Item
              name="title"
              rules={[{ required: true, message: translate({id: "message.addprompt.requiredTitle", message: "请输入提示词标题！"}) }]}
            >
              <Input placeholder={translate({id: "input.addprompt.title", message: "提示词名称"})} />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[{ required: true, message: translate({id: "message.addprompt.requiredDescription", message: "请输入提示词内容！"}) }]}
            >
              <Input.TextArea placeholder={translate({id: "input.addprompt.description", message: "提示词内容"})} rows={4} />
            </Form.Item>
            <Form.Item
              name="remark"
            >
              <Input placeholder={translate({id: "input.addprompt.remark", message: "提示词作用（非必填）"})} />
            </Form.Item>
            <Form.Item
              name="notes"
            >
              <Input.TextArea placeholder={translate({id: "input.addprompt.notes", message: "备注（非必填）：您可以在此提供提示词的来源说明，以及该提示词的其他语言版本。此外，如果您有任何关于该提示词的拓展想法和需求，请在此进行说明。"})} rows={3} />
            </Form.Item>
            <Typography.Text type="secondary">
            <Translate id="message.addprompt.submission">
            我们可能会对您提交的提示词进行适当的修改和翻译，并分享到公开页面，同时在词条上备注您的用户名。感谢您的分享与理解。
            </Translate>
            </Typography.Text>
            <Form.Item>
              <Button
                htmlType="submit"
                loading={loading}
                style={{ marginTop: "16px" }}
              >
                <Translate id="button.addPrompt">添加 Prompt</Translate>
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
       
       
        <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
          <LoginComponent />
        </Modal>
      </div>
    );
  }
};

export default UserStatus;
