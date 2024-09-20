import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import LogoAdmin from "../component/LogoAdmin.jsx";

const items = [
    {
        key: 'sub1',
        label: <Link to="/">Dashboard</Link>,
        icon: <i className="menu-icon tf-icons bx bx-home-circle"></i>
    },
    {
        key: 'sub2',
        label: 'Layouts',
        icon: <i className="menu-icon tf-icons bx bx-layout"></i>,
        children: [
            {
                key: 'layout1',
                label: <Link to="/layouts-without-menu">Without menu</Link>,
            },
            {
                key: 'layout2',
                label: <Link to="/layouts-without-navbar">Without navbar</Link>,
            },
            {
                key: 'layout3',
                label: <Link to="/layouts-container">Container</Link>,
            },
            {
                key: 'layout4',
                label: <Link to="/layouts-fluid">Fluid</Link>,
            },
            {
                key: 'layout5',
                label: <Link to="/layouts-blank">Blank</Link>,
            },
        ],
    },
    {
        key: 'sub3',
        label: 'Account Settings',
        icon: <i className="menu-icon tf-icons bx bx-dock-top"></i>,
        children: [
            {
                key: 'account',
                label: <Link to="/account">Account</Link>,
            },
            {
                key: 'notifications',
                label: <Link to="/pages-account-settings-notifications">Notifications</Link>,
            },
            {
                key: 'connections',
                label: <Link to="/pages-account-settings-connections">Connections</Link>,
            },
        ],
    },
    {
        key: 'sub4',
        label: 'Authentications',
        icon: <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>,
        children: [
            {
                key: 'login',
                label: <Link to="/login" target="_blank">Login</Link>,
            },
            {
                key: 'register',
                label: <Link to="/register" target="_blank">Register</Link>,
            },
            {
                key: 'forgot-password',
                label: <Link to="/auth-forgot-password-basic" target="_blank">Forgot Password</Link>,
            },
        ],
    },
    {
        key: 'sub5',
        label: 'Misc',
        icon: <i className="menu-icon tf-icons bx bx-cube-alt"></i>,
        children: [
            {
                key: 'error',
                label: <Link to="/pages-misc-error">Error</Link>,
            },
            {
                key: 'under-maintenance',
                label: <Link to="/pages-misc-under-maintenance">Under Maintenance</Link>,
            },
        ],
    },
    {
        key: 'components',
        label: 'Components',
        icon: <i className="menu-icon tf-icons bx bx-copy"></i>,
        children: [
            {
                key: 'cards',
                label: <Link to="/cards-basic">Cards</Link>,
            },
            {
                key: 'accordion',
                label: <Link to="/ui-accordion">Accordion</Link>,
            },
            {
                key: 'alerts',
                label: <Link to="/ui-alerts">Alerts</Link>,
            },
            {
                key: 'badges',
                label: <Link to="/ui-badges">Badges</Link>,
            },
            {
                key: 'buttons',
                label: <Link to="/ui-buttons">Buttons</Link>,
            },
            {
                key: 'carousel',
                label: <Link to="/ui-carousel">Carousel</Link>,
            },
            {
                key: 'collapse',
                label: <Link to="/ui-collapse">Collapse</Link>,
            },
            {
                key: 'dropdowns',
                label: <Link to="/ui-dropdowns">Dropdowns</Link>,
            },
            {
                key: 'footer',
                label: <Link to="/ui-footer">Footer</Link>,
            },
            {
                key: 'list-groups',
                label: <Link to="/ui-list-groups">List groups</Link>,
            },
            {
                key: 'modals',
                label: <Link to="/ui-modals">Modals</Link>,
            },
            {
                key: 'navbar',
                label: <Link to="/ui-navbar">Navbar</Link>,
            },
            {
                key: 'offcanvas',
                label: <Link to="/ui-offcanvas">Offcanvas</Link>,
            },
            {
                key: 'pagination-breadcrumbs',
                label: <Link to="/ui-pagination-breadcrumbs">Pagination & Breadcrumbs</Link>,
            },
            {
                key: 'progress',
                label: <Link to="/ui-progress">Progress</Link>,
            },
            {
                key: 'spinners',
                label: <Link to="/ui-spinners">Spinners</Link>,
            },
            {
                key: 'tabs-pills',
                label: <Link to="/ui-tabs-pills">Tabs & Pills</Link>,
            },
            {
                key: 'toasts',
                label: <Link to="/ui-toasts">Toasts</Link>,
            },
            {
                key: 'tooltips-popovers',
                label: <Link to="/ui-tooltips-popovers">Tooltips & Popovers</Link>,
            },
            {
                key: 'typography',
                label: <Link to="/ui-typography">Typography</Link>,
            },
        ],
    },
    {
        key: 'extended-ui',
        label: 'Extended UI',
        icon: <i className="menu-icon tf-icons bx bx-copy"></i>,
        children: [
            {
                key: 'perfect-scrollbar',
                label: <Link to="/extended-ui-perfect-scrollbar">Perfect Scrollbar</Link>,
            },
            {
                key: 'text-divider',
                label: <Link to="/extended-ui-text-divider">Text Divider</Link>,
            },
        ],
    },
    {
        key: 'icons',
        label: 'Icons',
        icon: <i className="menu-icon tf-icons bx bx-crown"></i>,
        children: [
            {
                key: 'boxicons',
                label: <Link to="/icons-boxicons">Boxicons</Link>,
            },
        ],
    },
    {
        key: 'forms-tables',
        label: 'Forms & Tables',
        icon: <i className="menu-icon tf-icons bx bx-detail"></i>,
        children: [
            {
                key: 'form-elements',
                label: 'Form Elements',
                children: [
                    {
                        key: 'basic-inputs',
                        label: <Link to="/forms-basic-inputs">Basic Inputs</Link>,
                    },
                    {
                        key: 'input-groups',
                        label: <Link to="/forms-input-groups">Input Groups</Link>,
                    },
                ],
            },
            {
                key: 'form-layouts',
                label: 'Form Layouts',
                children: [
                    {
                        key: 'vertical-form',
                        label: <Link to="/form-layouts-vertical">Vertical Form</Link>,
                    },
                    {
                        key: 'horizontal-form',
                        label: <Link to="/form-layouts-horizontal">Horizontal Form</Link>,
                    },
                ],
            },
        ],
    },
    {
        key: 'tables',
        label: <Link to="/tables-basic">Tables</Link>,
        icon: <i className="menu-icon tf-icons bx bx-table"></i>,
    },
    {
        key: 'support',
        label: <Link to="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                     target="_blank">Support</Link>,
        icon: <i className="menu-icon tf-icons bx bx-support"></i>,
    },
    {
        key: 'documentation',
        label: <Link to="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                     target="_blank">Documentation</Link>,
        icon: <i className="menu-icon tf-icons bx bx-file"></i>,
    },
];

function SideBar() {

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <LogoAdmin/>

            <div className="menu-inner-shadow"></div>

            <Menu
                style={{
                    width: "100%",
                    marginTop: 16,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </aside>
    )
}

export default SideBar;